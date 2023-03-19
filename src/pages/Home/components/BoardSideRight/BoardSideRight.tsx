import React from 'react';
import Search from 'antd/es/input/Search';

const BoardSideRight: React.FC = () => {
	const onSearch = (value: string) => console.log(value);
	return (
		<div>
			<Search placeholder="input search text" onSearch={onSearch} />
		</div>
	);
};
export default BoardSideRight;
