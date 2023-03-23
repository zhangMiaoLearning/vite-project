import React, { useContext, useEffect, useState } from 'react';
import './Header.scss';
import { Avatar, Breadcrumb } from 'antd';
import { items } from './HeaderMenu';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../Utils/Store/GlobalProvider';

const Header: React.FC = () => {
	const userName = sessionStorage.getItem('userName');
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState('/');
	const isLoginPage = currentPath === '/login';
	const isRegisterPage = currentPath === '/register';

	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location]);
	const headerContent = () => {
		if (!(isLoginPage || isRegisterPage)) {
			return (
				<>
					<Breadcrumb className="header-menu" items={items} />
					<section className="header-user">
						<Avatar>{userName}</Avatar>
					</section>
				</>
			);
		}
	};
	return (
		<div className="header">
			<section className="header-title">demo</section>
			{headerContent()}
		</div>
	);
};
export default Header;
