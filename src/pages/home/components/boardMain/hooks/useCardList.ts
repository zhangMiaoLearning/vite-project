import { orderBy } from 'lodash';
import { useSearchCardQuery } from '../../../../../slice/cardApiSlice';
import { useStoreDispatch, useStoreSelector } from '../../../../../store/Store';
import { updateQuery } from '../../../../../slice/cardSlice';

export const useCardList = () => {
	const dispatch = useStoreDispatch();
	const searchValue = useStoreSelector(
		(state) => state.card.query.keyword || ''
	);
	useSearchCardQuery(searchValue, {
		skip: false,
		refetchOnMountOrArgChange: true,
	});
	const list = useStoreSelector((state) => {
		return orderBy(state.card.cardList, ['updateAt'], ['desc']);
	});
	const onQuery = (value: string) => {
		dispatch(updateQuery(value));
	};

	return {
		list,
		onQuery,
	};
};
