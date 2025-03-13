import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/db/connect';
import { z } from 'zod';

const shortlinkSchema = z.object({
  hypertext_reference_link: z.string().url({ message: "Invalid URL format" }),
  slug_name: z.string().min(3, { message: "Shortlink name must be at least 3 characters long" }),
  note: z.string().optional()
});

export const POST: RequestHandler = async ({ request }) => {
  try {
    const requestData = await request.json();
    const validationResult = shortlinkSchema.safeParse(requestData);
    if (!validationResult.success) {
      return json({ success: false, error: validationResult.error.format() }, { status: 400 });
    }
    const { hypertext_reference_link, slug_name, note } = validationResult.data;
    const existingShortlink = await db
      .selectFrom('shortlink')
      .selectAll()
      .where('slug_name', '=', slug_name)
      .executeTakeFirst();
    if (existingShortlink) {
      return json({ 
        success: false, 
        error: 'This shortlink name is already taken' 
      }, { status: 409 });
    }
    await db
      .insertInto('shortlink')
      .values({ hypertext_reference_link, slug_name, note })
      .executeTakeFirstOrThrow();
    return json({
      success: true,
      message: 'Shortlink created successfully',
      shortlink_url: `https://fewpz.xyz/${slug_name}`
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating shortlink:', error);
    return json({ success: false, error: 'Failed to create shortlink' }, { status: 500 });
  }
};

export const GET: RequestHandler = async ({ url }) => {
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return json({ success: false, error: 'Slug parameter is required' }, { status: 400 });
  }
  try {
    const shortlink = await db
      .selectFrom('shortlink')
      .selectAll()
      .executeTakeFirst();
    if (!shortlink) {
      return json({ success: false, error: 'Shortlink not found' }, { status: 404 });
    }
    return json({
      success: true,
      shortlink,
      shortlink_url: `https://fewpz.xyz/${slug}`
    });
  } catch (error) {
    console.error('Error fetching shortlink:', error);
    return json({ success: false, error: 'Failed to fetch shortlink' }, { status: 500 });
  }
};

export const DELETE: RequestHandler = async ({ url }) => {
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return json({ success: false, error: 'Slug parameter is required' }, { status: 400 });
  }
  try {
    const existingShortlink = await db
      .selectFrom('shortlink')
      .selectAll()
      .where('slug_name', '=', slug)
      .executeTakeFirst();

    if (!existingShortlink) {
      return json({ success: false, error: 'Shortlink not found' }, { status: 404 });
    }
    await db
      .deleteFrom('shortlink')
      .where('slug_name', '=', slug)
      .execute();

    return json({
      success: true,
      message: 'Shortlink deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting shortlink:', error);
    return json({ success: false, error: 'Failed to delete shortlink' }, { status: 500 });
  }
};