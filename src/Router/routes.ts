import { lazy } from 'react';

const ROUTES = [
	{
		key: 'login',
		path: '/login',
		element: lazy(() => import('../pages/Login/Login')),
	},
];
export default ROUTES;
