import React from 'react';
import BoardSideLeft from './components/BoardSideLeft/BoardSideLeft';
import './Home.scss';
import BoardMain from './components/BoardMain/BoardMain';
import BoardSideRight from './components/BoardSideRight/BoardSideRight';
import { ReduxDemo } from './components/reduxDemo/ReduxDemo';

import BlogList from './components/BlogList/BlogList';
import Note from './components/Note/Note';
import { useSelector } from 'react-redux';
import { useCardList } from './components/BoardMain/hooks';

const Home = () => {
	const selectKey = useSelector((state: any) => state.home.selectKey);
	const { onQuery, list } = useCardList();
	const getMainContent = () => {
		if (selectKey === '1') {
			return <BoardMain list={list} />;
		}
		if (selectKey === '2') {
			return <ReduxDemo />;
		}
		if (selectKey === '3') {
			return <BlogList />;
		}
		if (selectKey === '4') {
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
