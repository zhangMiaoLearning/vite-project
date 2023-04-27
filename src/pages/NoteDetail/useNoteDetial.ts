import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetArticleById } from '../../Api/Note/GetArticleById';

interface NoteDetail {
	title: string;
	content: string;
	description: string;
	userName: string;
	updateAt: string;
	id: number;
}

export const useNoteDetail = () => {
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

	return content;
};
