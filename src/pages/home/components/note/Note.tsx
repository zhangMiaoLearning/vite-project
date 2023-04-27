import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Form, Input, Modal } from 'antd';
import './Note.scss';
import React from 'react';
import { useNote } from './hooks';

const Note = () => {
	const {
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
	} = useNote();

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
							onChange={handleContentChange}
							modules={{
								toolbar: {
									container: [
										['bold', 'italic', 'underline', 'strike'],
										[{ color: [] }, { background: [] }],
										['link', 'image'],
										['blockquote', 'code-block'],
										[{ list: 'ordered' }, { list: 'bullet' }],
										[{ align: [] }, { indent: '-1' }, { indent: '+1' }],
										['clean'],
									],
								},
							}}
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
