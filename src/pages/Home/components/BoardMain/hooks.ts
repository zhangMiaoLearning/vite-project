import { useMemo } from 'react';
import { useGetCardQuery } from '../../../../Slice/apiSlice';

export const useCardList = () => {
	const { data: cardList } = useGetCardQuery();
	return useMemo(() => {
		if (cardList) {
			const sortCards = cardList.slice();
			sortCards.sort((a, b) => b.updateAt.localeCompare(a.updateAt));
			return sortCards;
		}
	}, [cardList]);
};
