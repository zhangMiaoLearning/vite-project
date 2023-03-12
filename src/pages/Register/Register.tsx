import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RegisterApi } from '../../Api/RegisterApi';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmed, setConfirmed] = useState('');
	const navigate = useNavigate();

	async function onFinish(values: { userName: string; password: string }) {
		const result = await RegisterApi(values).then();
		if (result) {
			navigate('/home');
		}
	}

	function onFinishFailed() {
		Modal.error({
			title: '提示',
			content: '请正确填写注册信息',
		});
	}

	return (
		<div className="register-form-component">
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				validateTrigger={['onChange', 'onBlur']}
			>
				<p className="register-form-welcome-title">注册</p>
				<p className="register-form-input-title">用户名</p>
				<Form.Item
					name="userName"
					rules={[
						{
							required: true,
							message: '请输入您的用户名',
						},
						{
							pattern: /^[0-9a-zA-Z]+$/,
							message: '用户名仅支持数字、字母',
						},
						{ max: 20, message: '最多20个字符' },
						{ min: 5, message: '最少5个字符' },
					]}
				>
					<Input
						className="register-form-input"
						placeholder={'请输入您的用户名'}
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</Form.Item>
				<p className="register-form-input-title">创建密码</p>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: '请输入您的密码',
						},
						{
							pattern: /^[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/,
							message: '密码仅支持数字、字母、特殊符号',
						},
						{ max: 20, message: '最多20个字符' },
						{ min: 6, message: '最少6个字符' },
					]}
				>
					<Input.Password
						className="register-form-input"
						placeholder={'密码'}
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</Form.Item>
				<p className="register-form-input-title">确认密码</p>
				<Form.Item
					name="Confirm-password"
					hasFeedback
					dependencies={['password']}
					rules={[
						{
							required: true,
							message: '请再次输入您的密码',
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error('两次密码不一致，请重新输入'));
							},
						}),
					]}
				>
					<Input.Password
						className="register-form-input"
						placeholder={'请再次输入您的密码'}
						value={confirmed}
						onChange={(e) => {
							setConfirmed(e.target.value);
						}}
					/>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						block
						className="register-btn"
					>
						注册
					</Button>
				</Form.Item>
				<span className="login-line">
					已有账号
					<a href="/LoginPage" className="login-link">
						登录账号
					</a>
				</span>
			</Form>
		</div>
	);
};
export default Register;
