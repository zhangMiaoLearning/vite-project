import { updateQuery } from '../../../../Slice/cardSlice';
import { useStoreDispatch } from '../../../../Store/Store';

export const useSideRight = () => {
	const dispatch = useStoreDispatch();
	return (value: string) => {
		dispatch(updateQuery(value));
	};
};
