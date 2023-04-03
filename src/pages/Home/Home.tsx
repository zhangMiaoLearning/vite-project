import React from 'react';
import BoardSideLeft from './components/BoardSideLeft/BoardSideLeft';
import './Home.scss';
import BoardMain from './components/BoardMain/BoardMain';
import BoardSideRight from './components/BoardSideRight/BoardSideRight';
import { ReduxDemo } from './components/reduxDemo/ReduxDemo';

import BlogList from './components/BlogList/BlogList';
import Note from './components/Note/Note';
import { useCardList } from './components/BoardMain/hooks/hooks';
import { useStoreSelector } from '../../Store/Store';

const Home = () => {
	const menuOption = useStoreSelector((state) => state.home.menuOption);
	const { onQuery, list } = useCardList();
	const getMainContent = () => {
		if (menuOption === '1') {
			return <BoardMain list={list} />;
		}
		if (menuOption === '2') {
			return <ReduxDemo />;
		}
		if (menuOption === '3') {
			return <BlogList />;
		}
		if (menuOption === '4') {
			return <Note />;
		}
		return null;
	};

	return (
		<div className="main-content">
			<BoardSideLeft />
			<section className="main-content-center">{getMainContent()}</section>
			<BoardSideRight onQuery={onQuery} />
		</div>
	);
};
export default Home;
