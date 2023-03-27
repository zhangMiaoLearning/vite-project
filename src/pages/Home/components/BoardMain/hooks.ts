import { useMemo } from 'react';
import { useSearchCardQuery } from '../../../../Slice/apiSlice';
import { useSelector } from 'react-redux';

export const useCardList = () => {
	const searchValue = useSelector((state: any) => state.editCard.searchValue);
	const { data: cardList } = useSearchCardQuery(searchValue);
	return useMemo(() => {
		if (cardList) {
			const sortCards = cardList.slice();
			sortCards.sort((a, b) => b.updateAt.localeCompare(a.updateAt));
			return sortCards;
		}
	}, [cardList]);
};
