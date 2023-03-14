import React, { useState } from 'react';
import BoardSideLeft from './components/BoardSideLeft/boardSideLeft';
import './Home.scss';
import BoardMainArticle from './components/BoardMainArticle/BoardMainArticle';
import BoardSideRight from './components/BoardSideRight/BoardSideRight';
import BoardCard from './components/BoardCard/BoardCard';

const Home = () => {
	const [selectKey, setSelectKey] = useState('');
	const getMainContent = () => {
		if (selectKey === '1') {
			return (
				<div>
					<BoardMainArticle />
					<BoardCard />
				</div>
			);
		}
		return null;
	};

	return (
		<div className="main-content">
			<BoardSideLeft setSelectKey={setSelectKey} />
			<section className="main-content-center">{getMainContent()}</section>
			<BoardSideRight />
		</div>
	);
};
export default Home;
