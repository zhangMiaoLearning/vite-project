import React, { useMemo } from 'react';
import BoardCard from './Components/BoardCard/BoardCard';
import './BoardMain.scss';
import AddCard from './Components/BoardCard/AddCard';
import { useGetCardQuery } from '../../../../Slice/apiSlice';

const BoardMain: React.FC = () => {
	const { data: cardList } = useGetCardQuery();
	const sortCardList = useMemo(() => {
		if (cardList) {
			const sortCards = cardList.slice();
			sortCards.sort((a, b) => b.updateAt.localeCompare(a.updateAt));
			return sortCards;
		}
	}, [cardList]);

	return (
		<div className="card-display">
			<AddCard />
			{sortCardList
				? sortCardList.map(
						({ id, title, description, rate, updateAt, userName }) => (
							<BoardCard
								key={id}
								id={id}
								title={title}
								description={description}
								rate={rate}
								userName={userName}
								updateAt={updateAt}
							/>
						)
				  )
				: null}
		</div>
	);
};
export default BoardMain;
