import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		return await resolve(event);
	} catch (error) {
		console.error('Server error:', error);

		return new Response(
			JSON.stringify({
				message: 'Internal Server Error'
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};
