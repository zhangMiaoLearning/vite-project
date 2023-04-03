import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Form, Input, Modal } from 'antd';
import './Note.scss';
import React, { useState } from 'react';
import { AddArticle } from '../../../../Api/Note/AddArticle';
interface Note {
	title: string;
	content: HTMLInputElement;
}
const Note = () => {
	const [form] = Form.useForm();
	const [modalTitle, setModalTitle] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [okText, setOkText] = useState('');
	const [text, setText] = useState('');
	const [formValues, setFormValues] = useState<Note>({} as Note);
	const currentUserName = sessionStorage.getItem('userName');
	function handleAdd(values: { title: string; content: HTMLInputElement }) {
		setIsModalOpen(true);
		setModalTitle('添加文章');
		setOkText('添加');
		setText('确认添加此文章吗？');
		setFormValues(values);
	}

	const handleConfirm = () => {
		if (modalTitle === '添加文章') {
			AddArticle(formValues, currentUserName);
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

	return (
		<div className="article">
			<div className="title">新增一篇文章</div>
			<div className="article-form">
				<Form
					form={form}
					onFinish={handleAdd}
					wrapperCol={{ span: 16 }}
					// 注意：此处需要为富文本编辑表示的 content 文章内容设置默认值
					initialValues={{ content: '' }}
				>
					<Form.Item name="title" style={{ margin: 5 }}>
						<Input className="input-title" placeholder={'请输入文章标题'} />
					</Form.Item>
					<Form.Item name="content" rules={[{ message: '请输入文章内容' }]}>
						<ReactQuill
							className="publish-quill"
							theme="snow"
							placeholder="请输入文章内容"
						/>
					</Form.Item>
					<Form.Item>
						<div className="article-button">
							<Button type="primary" htmlType="submit">
								添加
							</Button>
							<Button onClick={handleResetForm}>清空</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
			<Modal
				title={modalTitle}
				open={isModalOpen}
				onOk={handleConfirm}
				onCancel={() => setIsModalOpen(false)}
				okText={okText}
				cancelText="取消"
				centered
			>
				<p>{text}</p>
			</Modal>
		</div>
	);
};
export default Note;
