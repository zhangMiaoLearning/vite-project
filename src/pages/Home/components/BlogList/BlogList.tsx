import { Avatar, List } from 'antd';
import React from 'react';
import { useBlogList } from './hooks';
import './BlogList.scss';

const BlogList: React.FC = () => {
	const { noteList, mockColor, onNoteDetail } = useBlogList();

	return (
		<div>
			<div className="blog-list-title">文章列表</div>
			<List
				itemLayout="vertical"
				size="large"
				pagination={{
					pageSize: 5,
				}}
				dataSource={noteList}
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
		</div>
	);
};

export default BlogList;
