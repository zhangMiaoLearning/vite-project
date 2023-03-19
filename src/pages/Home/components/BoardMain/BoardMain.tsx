import React, { useEffect, useState } from 'react';
import BoardCard from './Components/BoardCard/BoardCard';
import { GetCardInformation } from '../../../../Api/GetCardInformation';
import './BoardMain.scss';
import AddCard from './Components/BoardCard/AddCard';

const BoardMain: React.FC = () => {
	const [cardList, setCardList] = useState([]);
	async function intialData() {
		const result = await GetCardInformation().then();
		setCardList(result);
	}

	useEffect(() => {
		intialData().then();
	}, []);

	return (
		<div>
			<AddCard />
			{cardList.map(({ id, title, description, rate }) => (
				<BoardCard
					key={id}
					id={id}
					title={title}
					description={description}
					rate={rate}
				/>
			))}
		</div>
	);
};
export default BoardMain;
