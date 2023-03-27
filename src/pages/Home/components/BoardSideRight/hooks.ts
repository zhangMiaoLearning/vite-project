import { setSearchValue } from '../../../../Slice/cardSlice';
import { useDispatch } from 'react-redux';

export const useSideRight = () => {
	const dispatch = useDispatch();
	return (value: string) => {
		dispatch(setSearchValue(value));
	};
};
