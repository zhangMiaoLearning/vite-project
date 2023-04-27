import React from 'react';
import Search from 'antd/es/input/Search';
import './BoardSideRight.scss';
import { useCardList } from '../boardMain/hooks/useCardList';
import { useBoardSideRight } from './useBoardSideRight';

const BoardSideRight: React.FC<{ onQuery: (key: string) => void }> = () => {
	const { onQuery } = useCardList();
	const showSearch = useBoardSideRight();
	return (
		<div>
			<Search
				placeholder="请输入搜索内容"
				onSearch={onQuery}
				className={showSearch ? 'search-box' : 'search-box-hide'}
			/>
		</div>
	);
};
export default BoardSideRight;
