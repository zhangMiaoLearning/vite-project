import React from 'react';
import './NoteDetail.scss';
import ReactQuill from 'react-quill';
import { Divider } from 'antd';
import { Star } from './component/Star';
import { useNoteDetail } from './useNoteDetial';

const NoteDetail = () => {
	const content = useNoteDetail();
	return (
		<div className="article-detail">
			<div className="article-detail-aside">
				<Star container={'stars-left'} className={'star'} />
			</div>
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
			</div>
			<div className="article-detail-aside">
				<Star container={'stars-right'} className={'star-right'} />
			</div>
		</div>
	);
};
export default NoteDetail;
