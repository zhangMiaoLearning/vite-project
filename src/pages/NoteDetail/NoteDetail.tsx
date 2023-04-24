import React, { useEffect, useState } from 'react';
import './NoteDetail.scss';
import { useSearchParams } from 'react-router-dom';
import { GetArticleById } from '../../Api/Note/GetArticleById';
import ReactQuill from 'react-quill';
import { Divider, Input } from 'antd';

interface NoteDetail {
	title: string;
	content: string;
	description: string;
	userName: string;
	updateAt: string;
	id: number;
}
const NoteDetail = () => {
	const [params] = useSearchParams('');
	const id = params.getAll('id')[0];
	const [content, setContent] = useState({} as NoteDetail);
	useEffect(() => {
		initArticleData(id).then();
	}, [id]);
	async function initArticleData(id: string) {
		const data = await GetArticleById(id).then();
		setContent(data[0]);
	}
	return (
		<div className="article-detail">
			<div className="article-detail-aside">side</div>
			<div className="article-detail-main">
				<div className="article-detail-main-content">
					<div className="article-detail-main-content-title">
						{content.title}
					</div>
					<div className="article-detail-main-content-editor">
						作者：{content.userName} <Divider type="vertical" />
						时间：{content.updateAt}
					</div>
					<Divider className="divider" />
					<ReactQuill
						className="article-detail-main-content-body"
						value={content.content}
						readOnly={true}
						theme={''}
						modules={{ toolbar: false }}
					/>
				</div>
				<div>
					<Input />
				</div>
			</div>
			<div className="article-detail-aside">right</div>
		</div>
	);
};
export default NoteDetail;
