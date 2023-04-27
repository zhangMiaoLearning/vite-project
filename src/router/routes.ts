import { lazy } from 'react';

const ROUTES = [
	{
		key: 'login',
		path: '/login',
		element: lazy(() => import('../pages/login/Login')),
	},
	{
		key: 'mouse',
		path: '/mouse',
		element: lazy(
			() => import('../pages/components/mouseTracker/RenderPropModule')
		),
	},
	{
		key: 'register',
		path: '/register',
		element: lazy(() => import('../pages/register/Register')),
	},
	{
		key: 'home',
		path: '/home',
		element: lazy(() => import('../pages/home/Home')),
	},
	{
		key: 'note',
		path: '/note',
		element: lazy(() => import('../pages/noteDetail/NoteDetail')),
	},
];
export default ROUTES;
