import React from 'react';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}
export const BoardSideMenu: MenuProps['items'] = [
	getItem('文明', '1', null),
	getItem('明主', '2', null),
	getItem('和谐', '3', null),
	getItem('友善', '4', null),
];
