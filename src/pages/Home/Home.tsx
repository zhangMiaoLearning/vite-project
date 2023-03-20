import React, { useState } from 'react';
import BoardSideLeft from './components/BoardSideLeft/boardSideLeft';
import './Home.scss';
import BoardMain from './components/BoardMain/BoardMain';
import BoardSideRight from './components/BoardSideRight/BoardSideRight';
import { ReduxDemo } from './components/reduxDemo/ReduxDemo';
import { Provider } from 'react-redux';
import { cardStore } from '../../Utils/Store/CardStore';
import BlogList from './components/BlogList/BlogList';
import Mouse from '../Components/MouseTracker/Mouse';
import Heart from '../Components/MouseTracker/Heart';
import Note from './components/Note/Note';

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
		<Provider store={cardStore}>
			<Mouse render={(mouse) => <Heart mouse={mouse} />}>
				<div className="main-content">
					<BoardSideLeft setSelectKey={setSelectKey} />
					<section className="main-content-center">{getMainContent()}</section>
					<BoardSideRight />
				</div>
			</Mouse>
		</Provider>
	);
};
export default Home;
