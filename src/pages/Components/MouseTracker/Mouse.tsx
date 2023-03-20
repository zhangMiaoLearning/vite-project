import React, { ReactNode, useState } from 'react';
import './Mouse.scss';

const Mouse: React.FC<{
	render: (data: { x: number; y: number }) => ReactNode;
	children: React.ReactNode;
}> = (props) => {
	const [state, setState] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

	function handleMouseMove(e: any) {
		setState({ x: e.clientX + 10, y: e.clientY + 10 });
	}

	return (
		<div className="mouse-tracker" onMouseMove={handleMouseMove}>
			{props.children}
			{props.render(state)}
		</div>
	);
};
export default Mouse;
