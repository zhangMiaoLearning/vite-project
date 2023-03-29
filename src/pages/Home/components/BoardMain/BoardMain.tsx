import React from 'react';
import BoardCard from './Components/BoardCard/BoardCard';
import './BoardMain.scss';
import AddCard from './Components/BoardCard/AddCard/AddCard';
import { Card } from '../../../../Slice/cardApiSlice';

const BoardMain: React.FC<{ list?: Card[] }> = ({ list }) => {
	return (
		<div className="card-display">
			<AddCard />
			{list
				? list.map(({ id, title, description, rate, updateAt, userName }) => (
						<BoardCard
							key={id}
							id={id}
							title={title}
							description={description}
							rate={rate}
							userName={userName}
							updateAt={updateAt}
						/>
				  ))
				: null}
		</div>
	);
};
export default BoardMain;
