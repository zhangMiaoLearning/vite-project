import React, { useContext } from 'react';
import Search from 'antd/es/input/Search';
import { SearchCard } from '../../../../Api/Card/SearchCard';
import { GlobalContext } from '../../../../Utils/Store/GlobalProvider';
import './BoardSideRight.scss';

const BoardSideRight: React.FC = () => {
	const { setCardList } = useContext(GlobalContext);
	const onSearch = async (value: string) => {
		const result = await SearchCard(value).then();
		setCardList(result);
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
