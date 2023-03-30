import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setCurrentPath } from '../../../Slice/homeSlice';
import { useStoreSelector } from '../../../Store/Store';

export const useHeader = () => {
	const userName = sessionStorage.getItem('userName');
	const location = useLocation();
	const currentPath = useStoreSelector((state) => state.home.currentPath);
	const dispatch = useDispatch();
	const notShowHeaderPagePathList = ['/login', '/register'];
	const showHeader = notShowHeaderPagePathList.includes(currentPath);

	useEffect(() => {
		dispatch(setCurrentPath(location.pathname));
	}, [location]);
	return { userName, showHeader };
};
