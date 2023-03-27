import React from 'react';
import BoardCard from './Components/BoardCard/BoardCard';
import './BoardMain.scss';
import AddCard from './Components/BoardCard/AddCard/AddCard';
import { useCardList } from './hooks';

const BoardMain: React.FC = () => {
	const sortCardList = useCardList();

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
