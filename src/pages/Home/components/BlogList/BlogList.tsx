import { Avatar, List } from 'antd';
import React, { useEffect, useState } from 'react';
import { GetArticles } from '../../../../Api/Note/GetArticles';
import { Note } from '../../../../Slice/noteSlice';
import Mock from 'mockjs';
import { orderBy } from 'lodash';
import { useNavigate } from 'react-router-dom';

const BlogList: React.FC = () => {
	const [data, setData] = useState<Note[]>([]);
	const navigate = useNavigate();
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

	function onNoteDetail(id: string) {
		navigate(`/note?id=${id}`);
	}

	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				pageSize: 5,
			}}
			dataSource={data}
			renderItem={({ description, id, title, userName }) => (
				<List.Item key={id} onClick={() => onNoteDetail(id)}>
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
