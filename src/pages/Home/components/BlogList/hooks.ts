import { useEffect } from 'react';
import { initNodeList } from '../../../../Slice/noteSlice';
import { useNavigate } from 'react-router-dom';
import Mock from 'mockjs';
import { GetArticles } from '../../../../Api/Note/GetArticles';
import { orderBy } from 'lodash';
import { useStoreDispatch, useStoreSelector } from '../../../../Store/Store';

export const useBlogList = () => {
	const navigate = useNavigate();
	const mockColor = Mock.mock({
		color: '@color',
	}) as { color: string };
	const dispatch = useStoreDispatch();
	const noteList = useStoreSelector((state) => state.note.noteList);
	const currentName = sessionStorage.getItem('userName');
	useEffect(() => {
		getData().then();
	}, []);
	const getData = async () => {
		const data = await GetArticles();
		const oderData = orderBy(data, ['updateAt'], ['desc']);
		dispatch(initNodeList(oderData));
	};

	function onNoteDetail(id: string) {
		navigate(`/note?id=${id}`);
	}
	const isEdit = (userName: string | null) => {
		return currentName === userName;
	};
	return { noteList, mockColor, onNoteDetail, isEdit, currentName };
};
