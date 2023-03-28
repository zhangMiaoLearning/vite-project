import React from 'react';
import './Header.scss';
import { Avatar, Breadcrumb } from 'antd';
import { items } from './HeaderMenu';
import { useHeader } from './hooks';

const Header: React.FC = () => {
	const { userName, isLoginPage, isRegisterPage } = useHeader();
	return (
		<div className="header">
			<section className="header-title">demo</section>
			{isLoginPage || isRegisterPage ? null : (
				<>
					<Breadcrumb className="header-menu" items={items} />
					<section className="header-user">
						<Avatar>{userName}</Avatar>
					</section>
				</>
			)}
		</div>
	);
};
export default Header;
