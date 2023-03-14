import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';
const Login = () => {
	return (
		<div className="login-page">
			<img
				className="login-page-background-img"
				src="../../public/asset/login-background.png"
				alt=""
			/>
			<LoginForm />
		</div>
	);
};
export default Login;
