import React from 'react';
import Search from 'antd/es/input/Search';
import './BoardSideRight.scss';
import { useSideRight } from './hooks';

const BoardSideRight: React.FC = () => {
	const onSearch = useSideRight();
	return (
		<div>
			<Search
				placeholder="请输入搜索内容"
				onSearch={onSearch}
				className="search-box"
			/>
		</div>
	);
};
export default BoardSideRight;
