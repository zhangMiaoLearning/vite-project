import React, { useContext, useEffect, useState } from 'react';
import BoardCard from './Components/BoardCard/BoardCard';
import { GetCardInformation } from '../../../../Api/Card/GetCardInformation';
import './BoardMain.scss';
import AddCard from './Components/BoardCard/AddCard';
import PubSub from 'pubsub-js';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CARD_LIST } from '../../../../Utils/Action/CardAction';
import { RootDispatch, RootState } from '../../../../Utils/Store/CardStore';
import { getCardList } from '../../../../Utils/Reducer/CardReducer';
import { GlobalContext } from '../../../../Utils/Store/GlobalProvider';

const BoardMain: React.FC = () => {
	const { cardList, setCardList } = useContext(GlobalContext);
	async function intialData() {
		const result = await GetCardInformation().then();
		setCardList(result);
	}

	useEffect(() => {
		intialData().then();
		const refreshCardList = PubSub.subscribe('refreshCardList', intialData);
		return () => {
			PubSub.unsubscribe(refreshCardList);
		};
	}, []);

	// const dispatch: RootDispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getCardList());
	// }, []);
	//
	// const cardList = useSelector((state: RootState) => state.cardList.cardList);

	return (
		<div className="card-display">
			<AddCard />
			{cardList.map(({ id, title, description, rate, updateAt, userName }) => (
				<BoardCard
					key={id}
					id={id}
					title={title}
					description={description}
					rate={rate}
					userName={userName}
					updateAt={updateAt}
				/>
			))}
		</div>
	);
};
export default BoardMain;
