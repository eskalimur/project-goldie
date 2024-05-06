import { dev } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';
import { JWT_PRIVATE_KEY } from '$env/static/private';
import jsonwebtoken from 'jsonwebtoken';
import { goto } from '$app/navigation';

type user = {
	email: string;
	password: string;
	id: string;
};

const users = [
	{
		email: 'user1@gmail.com',
		password: 'password1',
		id: '6a02f042-3e51-4436-a85d-2bb63f81b873'
	},
	{
		email: 'user2@gmail.com',
		password: 'password2',
		id: '25357014-b546-4829-8381-57570c98f83f'
	},
	{
		email: 'user3@gmail.com',
		password: 'password3',
		id: '31354fdc-f868-40e1-a91c-3f00b9c22022'
	}
];

export const authenticate = (cookies: Cookies, email: string, password: string) => {
	let user = users.find((user: user) => user.email === email && user.password === password);
	if (user) {
		storeCookie(cookies, user.id);
		return true;
	}

	return false;
};

export const logout = (cookies: Cookies) => {
	removeCookie(cookies);
	return () => {
		goto('/');
	};
};

export const isAuthenticated = (cookies: Cookies) => {
	const jwt = cookies.get('Authentication_');

	if (!jwt) {
		return false;
	}

	try {
		const token = jwt.split(' ')[1];
		const { id } = jsonwebtoken.verify(token, JWT_PRIVATE_KEY) as { id: string };
		console.log(
			'user is authenticated: ',
			users.some((user: user) => user.id === id)
		);
		return users.some((user: user) => user.id === id);
	} catch {
		return false;
	}
};

const storeCookie = (cookies: Cookies, id: string) => {
	const jwt = jsonwebtoken.sign({ id }, JWT_PRIVATE_KEY, { expiresIn: '2h' });
	cookies.set('Authentication_', `Bearer ${jwt}`, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: !dev,
		maxAge: 60 * 60 * 35 * 30
	});
};

const removeCookie = (cookies: Cookies) => {
	cookies.delete('Authentication_', { path: '/' });
};
