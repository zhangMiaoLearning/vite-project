import React from 'react';
import BoardSideLeft from './components/boardSideLeft/BoardSideLeft';
import './Home.scss';
import BoardMain from './components/boardMain/BoardMain';
import BoardSideRight from './components/boardSideRight/BoardSideRight';
import { ReduxDemo } from './components/reduxDemo/ReduxDemo';

import BlogList from './components/blogList/BlogList';
import Note from './components/note/Note';
import { useCardList } from './components/boardMain/hooks/useCardList';
import { useStoreSelector } from '../../store/Store';

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
