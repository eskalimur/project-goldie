import { authenticate, logout as authServiceLogout } from '$lib/services/authenticationService';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		isAuthenticated: locals.authenticated
	};
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const credentials = await request.formData();
		const email = credentials.get('email') as string;
		const password = credentials.get('password') as string;

		if (!email || !password) {
			return fail(400, { required: true });
		}

		let authenticated = authenticate(cookies, email, password);

		if (!authenticated) return fail(401, { invalid: true });
	},
	logout: async ({ cookies }) => {
		authServiceLogout(cookies);
	}
};
