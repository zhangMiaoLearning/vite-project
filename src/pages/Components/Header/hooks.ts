import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setCurrentPath } from '../../../Slice/homeSlice';

export const useHeader = () => {
	const userName = sessionStorage.getItem('userName');
	const location = useLocation();
	const currentPath = useSelector((state: any) => state.home.currentPath);
	const dispatch = useDispatch();
	const isLoginPage = currentPath === '/login';
	const isRegisterPage = currentPath === '/register';

	useEffect(() => {
		dispatch(setCurrentPath(location.pathname));
	}, [location]);
	return { userName, isLoginPage, isRegisterPage };
};
