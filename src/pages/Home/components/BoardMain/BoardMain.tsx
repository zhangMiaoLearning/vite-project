import React, { useEffect, useState } from 'react';
import BoardCard from './Components/BoardCard/BoardCard';
import { GetCardInformation } from '../../../../Api/Card/GetCardInformation';
import './BoardMain.scss';
import AddCard from './Components/BoardCard/AddCard';
import PubSub from 'pubsub-js';

const BoardMain: React.FC = () => {
	const [cardList, setCardList] = useState([]);
	async function intialData() {
		const result = await GetCardInformation().then();
		setCardList(result);
	}

	useEffect(() => {
		const refreshCardList = PubSub.subscribe('refreshCardList', intialData);
		intialData().then();
		return () => {
			PubSub.unsubscribe(refreshCardList);
		};
	}, []);

	return (
		<div className="card-display">
			<AddCard />
			{cardList.map(({ id, title, description, rate, updateAt }) => (
				<BoardCard
					key={id}
					id={id}
					title={title}
					description={description}
					rate={rate}
					updateAt={updateAt}
				/>
			))}
		</div>
	);
};
export default BoardMain;
