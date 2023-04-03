import React from 'react';
import Search from 'antd/es/input/Search';
import './BoardSideRight.scss';
import { useCardList } from '../BoardMain/hooks/hooks';

const BoardSideRight: React.FC<{ onQuery: (key: string) => void }> = () => {
	const { onQuery } = useCardList();
	return (
		<div>
			<Search
				placeholder="请输入搜索内容"
				onSearch={onQuery}
				className="search-box"
			/>
		</div>
	);
};
export default BoardSideRight;
