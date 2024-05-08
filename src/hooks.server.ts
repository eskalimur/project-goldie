import { isAuthenticated } from '$lib/services/authenticationService';
import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals = { authenticated: isAuthenticated(event.cookies) };
	return await resolve(event);
};
