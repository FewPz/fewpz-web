import { db } from '$lib/db/connect';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const shortlink = await db
		.selectFrom('shortlink')
		.selectAll()
		.where('slug_name', '=', slug)
		.executeTakeFirst();
	
	if (!shortlink) {
		return new Response('Not found', { status: 404 });
	}
	throw redirect(307, shortlink.hypertext_reference_link);
};
