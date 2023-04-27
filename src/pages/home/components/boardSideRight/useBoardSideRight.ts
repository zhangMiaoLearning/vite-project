import { useStoreSelector } from '../../../../store/Store';

export const useBoardSideRight = () => {
	const menuOption = useStoreSelector((state) => state.home.menuOption);
	const showSearch: boolean = menuOption === '1';
	return showSearch;
};