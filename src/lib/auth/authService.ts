import createAuth0Client, { Auth0Client, type Auth0ClientOptions } from '@auth0/auth0-spa-js';
import { user, isAuthenticated, popupOpen } from '$lib/stores';

async function createClient() {
	let auth0Client = await createAuth0Client({
		domain: import.meta.env.VITE_AUTH0_DOMAIN,
		client_id: import.meta.env.VITE_AUTH0_CLIENT_ID
	});

	return auth0Client;
}

async function loginWithPopup(client: Auth0Client, options?: Auth0ClientOptions) {
	popupOpen.set(true);
	try {
		await client.loginWithPopup(options);
		console.log(client);
		user.set((await client.getUser()) || {});
		isAuthenticated.set(true);
	} catch (e) {
		// eslint-disable-next-line
		console.error(e);
	} finally {
		popupOpen.set(false);
	}
}

function logout(client: Auth0Client) {
	return client.logout();
}

const auth = {
	createClient,
	loginWithPopup,
	logout
};

export default auth;
