import React, { useState } from 'react';
import BoardSideLeft from './components/BoardSideLeft/boardSideLeft';
import './Home.scss';
import BoardMainTop from './components/BoardMainTop/BoardMainTop';
import BoardSideRight from './components/BoardSideRight/BoardSideRight';

const Home = () => {
	const [selectKey, setSelectKey] = useState('');
	const getMainContent = () => {
		if (selectKey === '1') {
			return <BoardMainTop />;
		}
		return null;
	};

	return (
		<div className="main-content">
			<BoardSideLeft setSelectKey={setSelectKey} />
			{getMainContent()}
			<BoardSideRight />
		</div>
	);
};
export default Home;
