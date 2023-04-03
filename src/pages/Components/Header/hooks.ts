import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { saveCurrentPath } from '../../../Slice/homeSlice';
import { useStoreDispatch, useStoreSelector } from '../../../Store/Store';

export const useHeader = () => {
	const userName = sessionStorage.getItem('userName');
	const location = useLocation();
	const currentPath = useStoreSelector((state) => state.home.currentPath);
	const dispatch = useStoreDispatch();
	const notShowHeaderPagePathList = ['/login', '/register'];
	const showHeader = notShowHeaderPagePathList.includes(currentPath);

	useEffect(() => {
		dispatch(saveCurrentPath(location.pathname));
	}, [location]);
	return { userName, showHeader };
};
