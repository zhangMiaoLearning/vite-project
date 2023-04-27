import Form from 'antd/es/form';
import React from 'react';
import { Rate } from 'antd';

interface CardRateProps {
	isEdit: boolean;
	rate?: number;
}
export const CardRate: React.FC<CardRateProps> = (props) => {
	return (
		<div>
			<Form.Item name={'rate'} initialValue={props.rate} style={{ margin: 0 }}>
				<Rate disabled={!props.isEdit} />
			</Form.Item>
		</div>
	);
};
