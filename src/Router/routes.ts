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
	{
		key: 'home',
		path: '/home',
		element: lazy(() => import('../pages/Home/Home')),
	},
	{
		key: 'note',
		path: '/note',
		element: lazy(() => import('../pages/NoteDetail/NoteDetail')),
	},
];
export default ROUTES;
