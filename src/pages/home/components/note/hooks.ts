import { Form } from 'antd';
import { useState } from 'react';
import { timeTransformation } from '../../../../utils/getTime';
import { AddArticle } from '../../../../api/Note/AddArticle';
import { useStoreDispatch } from '../../../../store/Store';
import { confirmCreat } from '../../../../slice/noteSlice';

interface InputNote {
	title: string;
	content: HTMLInputElement;
}

export const useNote = () => {
	const [form] = Form.useForm();
	const [modalTitle, setModalTitle] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [okText, setOkText] = useState('');
	const [text, setText] = useState('');
	const [formValues, setFormValues] = useState<InputNote>({} as InputNote);
	const currentUserName = sessionStorage.getItem('userName');
	const date = timeTransformation(new Date());
	const [description, setDescription] = useState('');
	const dispatch = useStoreDispatch();
	function handleAdd(values: { title: string; content: HTMLInputElement }) {
		setIsModalOpen(true);
		setModalTitle('添加文章');
		setOkText('添加');
		setText('确认添加此文章吗？');
		setFormValues(values);
	}

	const handleConfirm = () => {
		if (modalTitle === '添加文章') {
			AddArticle(formValues, description, currentUserName, date);
			dispatch(
				confirmCreat({
					id: 'id',
					title: formValues.title,
					description: description,
					content: formValues.content,
					updateAt: date,
					userName: currentUserName,
				})
			);
		}
		setIsModalOpen(false);
		form.resetFields();
	};
	const handleResetForm = () => {
		setIsModalOpen(true);
		setModalTitle('清空文章');
		setOkText('清空');
		setText('确认清空此文章吗？');
	};

	// 将获取的富文本内容转为字符串
	const getPlainText = (html: string) => {
		const div = document.createElement('div');
		div.innerHTML = html;
		return div.textContent || div.innerText || '';
	};

	// 获取富文本内容并提取简介
	const handleContentChange = (value: string) => {
		const plainText = getPlainText(value).trim();
		const summary =
			plainText.length > 100 ? plainText.slice(0, 100) + '...' : plainText;
		setDescription(summary);
	};
	return {
		form,
		modalTitle,
		isModalOpen,
		setIsModalOpen,
		okText,
		text,
		handleAdd,
		handleConfirm,
		handleResetForm,
		handleContentChange,
	};
};
