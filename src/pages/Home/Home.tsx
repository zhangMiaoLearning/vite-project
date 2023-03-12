import React, { useContext } from 'react';
import { GlobalContext } from '../../Utils/Store/GlobalProvider';

const Home = () => {
	const { currentUserInfo } = useContext(GlobalContext);
	return <div>{currentUserInfo.username}</div>;
};
export default Home;
