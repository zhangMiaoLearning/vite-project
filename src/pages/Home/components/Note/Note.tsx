import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Form } from 'antd';
import './Note.scss';
import React from 'react';

const Note = () => {
	const [form] = Form.useForm();
	function onFinish() {
		return null;
	}
	return (
		<div className="article">
			<div className="title">新增一篇文章</div>
			<div className="article-form">
				<Form
					form={form}
					onFinish={onFinish}
					wrapperCol={{ span: 16 }}
					// 注意：此处需要为富文本编辑表示的 content 文章内容设置默认值
					initialValues={{ content: '' }}
				>
					<Form.Item name="content" rules={[{ message: '请输入文章内容' }]}>
						<ReactQuill
							className="publish-quill"
							theme="snow"
							placeholder="请输入文章内容"
						/>
					</Form.Item>
				</Form>
			</div>
			<div className="article-button">
				<Button type="primary" htmlType="submit">
					添加
				</Button>
				<Button>清空</Button>
			</div>
		</div>
	);
};
export default Note;
