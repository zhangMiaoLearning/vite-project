import { lazy } from 'react';

const ROUTES = [
	{
		key: 'login',
		path: '/login',
		element: lazy(() => import('../pages/Login/Login')),
	},
	{
		key: 'mouse',
		path: '/mouse',
		element: lazy(
			() => import('../pages/Components/MouseTracker/RenderPropModule')
		),
	},
	{
		key: 'register',
		path: '/register',
		element: lazy(() => import('../pages/Register/Register')),
	},
];
export default ROUTES;
