import React from 'react';
import Search from 'antd/es/input/Search';
import { SearchCard } from '../../../../Api/Card/SearchCard';

const BoardSideRight: React.FC = () => {
	const onSearch = async (value: string) => {
		const result = await SearchCard(value).then();
	};
	return (
		<div>
			<Search placeholder="请输入搜索内容" onSearch={onSearch} />
		</div>
	);
};
export default BoardSideRight;
