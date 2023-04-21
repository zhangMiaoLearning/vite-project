import { Avatar, List } from 'antd';
import React, { useEffect, useState } from 'react';
import { GetArticles } from '../../../../Api/Note/GetArticles';
import { Note } from '../../../../Slice/noteSlice';
import Mock from 'mockjs';
import { orderBy } from 'lodash';

const BlogList: React.FC = () => {
	const [data, setData] = useState<Note[]>([]);
	const mockColor = Mock.mock({
		color: '@color',
	}) as { color: string };

	useEffect(() => {
		getData().then();
	}, []);
	const getData = async () => {
		const data = await GetArticles();
		const oderData = orderBy(data, ['updateAt'], ['desc']);
		setData(oderData);
	};
	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				pageSize: 5,
			}}
			dataSource={data}
			footer={
				<div>
					<b>ant design</b> footer part
				</div>
			}
			renderItem={({ description, id, title, userName }) => (
				<List.Item key={id}>
					<List.Item.Meta
						avatar={
							<Avatar style={{ backgroundColor: mockColor.color }}>
								{userName}
							</Avatar>
						}
						title={title}
					/>
					{description}
				</List.Item>
			)}
		/>
	);
};

export default BlogList;
