import React from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RegisterApi } from '../../Api/RegisterApi';
import { ValidUsername } from '../../Api/ValidUsername';
import './Register.scss';
import { StoreValue } from 'rc-field-form/lib/interface';
import { NamePath } from 'antd/es/form/interface';
import { useStoreDispatch, useStoreSelector } from '../../Store/Store';
import {
	confirmPassword,
	savePassWord,
	saveUserName,
} from '../../Slice/homeSlice';

const Register = () => {
	const navigate = useNavigate();
	const dispatch = useStoreDispatch();
	const username = useStoreSelector(
		(state) => state.home.userInformation.username
	);
	const password = useStoreSelector(
		(state) => state.home.userInformation.password
	);
	const confirmed = useStoreSelector((state) => state.home.confirmPassword);

	async function onFinish(values: { userName: string; password: string }) {
		const valid = await ValidUsername(values.userName).then();
		if (valid) {
			message.error('用户名已存在');
			return;
		} else {
			const result = await RegisterApi(values).then();
			if (result) {
				navigate('/home');
				sessionStorage.setItem('userName', values.userName);
			}
		}
	}

	function onFinishFailed() {
		Modal.error({
			title: '提示',
			content: '请正确填写注册信息',
		});
	}

	const onInputUsername = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(saveUserName(e.currentTarget.value));
	};

	const onInputPassword = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(savePassWord(e.currentTarget.value));
	};
	const onSaveConfirmed = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(confirmPassword(e.currentTarget.value));
	};

	function verifyPassword(getFieldValue: (name: NamePath) => StoreValue) {
		return {
			validator(_: object, value: string) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject(new Error('两次密码不一致，请重新输入'));
			},
		};
	}

	return (
		<div className="register-form-component">
			<p className="register-form-welcome-title">注册</p>
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				validateTrigger={['onChange', 'onBlur']}
			>
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
						onChange={onInputUsername}
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
						onChange={onInputPassword}
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
						({ getFieldValue }) => verifyPassword(getFieldValue),
					]}
				>
					<Input.Password
						className="register-form-input"
						placeholder={'请再次输入您的密码'}
						value={confirmed}
						onChange={onSaveConfirmed}
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
			</Form>
			<span className="login-line">
				已有账号
				<a href="/login" className="login-link">
					登录账号
				</a>
			</span>
		</div>
	);
};
export default Register;
