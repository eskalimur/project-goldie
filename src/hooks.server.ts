import { goto } from "$app/navigation";
import { isAuthenticated } from "$lib/services/authenticationService";
import type { Handle } from "@sveltejs/kit"


export const handle: Handle = async ({ event,resolve }) => {
    if (isAuthenticated(event.cookies)) {
        event.locals = {authenticated: true};
    }
   
    return await resolve(event)
  }
  