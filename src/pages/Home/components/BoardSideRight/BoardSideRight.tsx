import React from 'react';
import Search from 'antd/es/input/Search';
import './BoardSideRight.scss';
import { useCardList } from '../BoardMain/hooks/hooks';
import { useBoardSideRight } from './hooks';

const BoardSideRight: React.FC<{ onQuery: (key: string) => void }> = () => {
	const { onQuery } = useCardList();
	const showSearch = useBoardSideRight();
	return (
		<div>
			{showSearch ? (
				<Search
					placeholder="请输入搜索内容"
					onSearch={onQuery}
					className="search-box"
				/>
			) : null}
		</div>
	);
};
export default BoardSideRight;
