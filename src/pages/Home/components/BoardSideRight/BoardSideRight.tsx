import React from 'react';
import Search from 'antd/es/input/Search';
import './BoardSideRight.scss';
import { useSearchCardQuery } from '../../../../Slice/apiSlice';

const BoardSideRight: React.FC = () => {
	const onSearch = (value: string) => {
		const { data: cardList } = useSearchCardQuery(value);
		console.log(cardList);
	};
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
