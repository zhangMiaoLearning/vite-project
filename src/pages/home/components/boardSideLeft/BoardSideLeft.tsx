import React from 'react';
import { Menu } from 'antd';
import { BoardSideMenu } from './BoardSideMenu/BoardSideMenu';
import './BoardSideLeft.scss';
import { useBoardSideLeft } from './useBoardSideLeft';

const BoardSideLeft = () => {
	const onClick = useBoardSideLeft();
	return (
		<div className="boardSide-content">
			<Menu
				mode="inline"
				items={BoardSideMenu}
				onClick={(e) => onClick(e)}
				defaultSelectedKeys={['1']}
			/>
		</div>
	);
};
export default BoardSideLeft;
