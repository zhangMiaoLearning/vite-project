import React from 'react';
import './Header.scss';
import { Avatar, Breadcrumb } from 'antd';
import { useHeader } from './useHeader';
import { items } from './HeaderMenu';
const Header: React.FC = () => {
	const { userName, showHeader } = useHeader();
	return (
		<div className="header">
			<section className="header-title">demo</section>
			{showHeader ? null : (
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
