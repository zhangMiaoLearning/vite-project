import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
const Heart: React.FC<{ mouse: { x: number; y: number } }> = (props) => {
	return (
		<HeartOutlined
			style={{
				position: 'absolute',
				left: props.mouse.x,
				top: props.mouse.y,
			}}
		/>
	);
};
export default Heart;
