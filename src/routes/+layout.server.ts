import type { Actions, LayoutServerLoad } from './$types'
export const load: LayoutServerLoad = async ({locals}) => {
  return {
    isAuthenticated: locals.authenticated,
  }
}
