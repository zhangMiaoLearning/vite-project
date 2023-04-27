import React from 'react';
import LoginForm from './loginForm/LoginForm';
import './Login.scss';
import { useLogin } from './hooks/useLogin';
const Login = () => {
	const { onFinish, onFinishFailed } = useLogin();
	return (
		<div className="login-page">
			<img
				className="login-page-background-img"
				src="../../public/asset/login-background.png"
				alt=""
			/>
			<LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
		</div>
	);
};
export default Login;
