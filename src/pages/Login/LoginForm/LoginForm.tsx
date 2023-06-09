import React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './LoginForm.scss';
interface LoginFormProps {
	onFinish: (values: { username: string; password: string }) => void;
	onFinishFailed: () => void;
}
const LoginForm: React.FC<LoginFormProps> = (props) => {
	return (
		<div className="login-form-page">
			<p className="login-form-title">登 录</p>
			<div className="login-form">
				<Form
					name="basic"
					onFinish={props.onFinish}
					onFinishFailed={props.onFinishFailed}
					autoComplete="off"
					className="login-form"
				>
					<Form.Item
						name="username"
						className="username-form"
						rules={[
							{ required: true, message: '请输入用户名' },
							{ max: 20, message: '最多20个字符' },
							{ min: 5, message: '最少5个字符' },
							{
								pattern: new RegExp('^[A-Za-z0-9]+$', 'g'),
								message: '用户名仅支持数字、字母',
							},
						]}
					>
						<Input placeholder="请输入用户名" prefix={<UserOutlined />} />
					</Form.Item>

					<Form.Item
						className="password-form"
						name="password"
						rules={[
							{ required: true, message: '请输入您的密码!' },
							{ max: 20, message: '最多20个字符' },
							{ min: 6, message: '最少6个字符' },
						]}
					>
						<Input.Password
							placeholder="请输入密码"
							prefix={<LockOutlined />}
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" block>
							登录
						</Button>
						<div className="register-line">
							还没有账号，
							<a href="/register" className="register-link">
								注册一个账户
							</a>
						</div>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};
export default LoginForm;
