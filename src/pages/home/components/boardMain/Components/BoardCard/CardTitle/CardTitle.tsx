import React from 'react';
import { Form, Input } from 'antd';

interface CardTitleProps {
	isEdit: boolean;
	title?: string;
	placeholder?: string;
}
export const CardTitle: React.FC<CardTitleProps> = (props) => {
	return (
		<Form.Item name={'title'} initialValue={props.title} style={{ margin: 0 }}>
			{props.isEdit ? (
				<Input placeholder={props.placeholder} />
			) : (
				`${props.title}`
			)}
		</Form.Item>
	);
};
