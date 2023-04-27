import React from 'react';
import {
	DollarCircleOutlined,
	HeartFilled,
	SmileOutlined,
	StarFilled,
} from '@ant-design/icons';
import './Star.scss';
interface StarProps {
	className: string;
	container: string;
}
export const Star: React.FC<StarProps> = (props) => {
	return (
		<div className={props.container}>
			<StarFilled className={props.className} />
			<DollarCircleOutlined className={props.className} />
			<HeartFilled className={props.className} />
			<SmileOutlined className={props.className} />
			<StarFilled className={props.className} />
			<DollarCircleOutlined className={props.className} />
		</div>
	);
};
