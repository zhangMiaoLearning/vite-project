import React from 'react';
import './Header.scss';
import { Avatar, Breadcrumb } from 'antd';

interface HeaderProps {
	userName: string | null;
	showHeader: boolean;
	items: { title: JSX.Element }[];
}
const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className="header">
			<section className="header-title">demo</section>
			{props.showHeader ? null : (
				<>
					<Breadcrumb className="header-menu" items={props.items} />
					<section className="header-user">
						<Avatar>{props.userName}</Avatar>
					</section>
				</>
			)}
		</div>
	);
};
export default Header;
