import React, { Dispatch } from 'react';
import { Menu, MenuProps } from 'antd';
import { BoardSideMenu } from './BoardSideMenu';
import './BoardSideLeft.scss';
interface BoardSideLeftProps {
	setSelectKey: Dispatch<string>;
}

const BoardSideLeft: React.FC<BoardSideLeftProps> = (props) => {
	const onClick: MenuProps['onClick'] = (e) => {
		props.setSelectKey(e.key);
	};
	return (
		<div className="boardSide-content">
			<Menu mode="inline" items={BoardSideMenu} onClick={onClick} />
		</div>
	);
};
export default BoardSideLeft;
