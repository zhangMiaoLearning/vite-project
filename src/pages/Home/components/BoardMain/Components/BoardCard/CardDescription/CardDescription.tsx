import React from 'react';
import Meta from 'antd/es/card/Meta';
import Form from 'antd/es/form';
import TextArea from 'antd/es/input/TextArea';

interface CardDescriptionProps {
	isEdit: boolean;
	description?: string;
}
export const CardDescription: React.FC<CardDescriptionProps> = (props) => {
	return (
		<Meta
			description={
				<Form.Item name={'description'} initialValue={props.description}>
					{props.isEdit ? (
						<TextArea
							placeholder={`请输入卡片内容`}
							showCount
							maxLength={100}
						/>
					) : (
						props.description
					)}
				</Form.Item>
			}
		/>
	);
};
