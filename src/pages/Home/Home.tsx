import React, { useState } from 'react';
import BoardSideLeft from './components/BoardSideLeft/boardSideLeft';
import './Home.scss';
import BoardMain from './components/BoardMain/BoardMain';
import BoardSideRight from './components/BoardSideRight/BoardSideRight';
import { ReduxDemo } from './components/reduxDemo/ReduxDemo';

const Home = () => {
	const [selectKey, setSelectKey] = useState('');
	const getMainContent = () => {
		if (selectKey === '1') {
			return <BoardMain />;
		}
		if (selectKey === '2') {
			return <ReduxDemo />;
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
