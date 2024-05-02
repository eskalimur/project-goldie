
import { authenticate, logout as authServiceLogout } from "$lib/services/authenticationService";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {

    login: async ({request, cookies}) => {
        console.log('loginAction');
        
        const credentials = await request.formData();
        const email = credentials.get('email') as string;
        const password = credentials.get('password') as string;
       

        if(!email || !password) {
            return fail(
                400,
                { required: true }
            );
        }

        let authenticated = authenticate(cookies, email, password);
        console.log(authenticated);
        
        if(authenticated) {
            throw redirect(307,'/Gold');
        }
        else {
            return fail(
                401,
                { invalid: true }
            );
        }
    },
    logout: async ({ cookies }) => {
        authServiceLogout(cookies);
    }
}
