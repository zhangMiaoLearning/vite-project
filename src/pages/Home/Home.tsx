import React, { useState } from 'react';
import BoardSideLeft from './components/BoardSideLeft/boardSideLeft';
import './Home.scss';
import BoardMain from './components/BoardMain/BoardMain';
import BoardSideRight from './components/BoardSideRight/BoardSideRight';
import { ReduxDemo } from './components/reduxDemo/ReduxDemo';

import BlogList from './components/BlogList/BlogList';
import Mouse from '../Components/MouseTracker/Mouse';
import Heart from '../Components/MouseTracker/Heart';
import Note from './components/Note/Note';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../../Slice/apiSlice';

const Home = () => {
	const [selectKey, setSelectKey] = useState('1');
	const getMainContent = () => {
		if (selectKey === '1') {
			return <BoardMain />;
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
		<ApiProvider api={apiSlice}>
			<Mouse render={(mouse) => <Heart mouse={mouse} />}>
				<div className="main-content">
					<BoardSideLeft setSelectKey={setSelectKey} />
					<section className="main-content-center">{getMainContent()}</section>
					<BoardSideRight />
				</div>
			</Mouse>
		</ApiProvider>
	);
};
export default Home;
