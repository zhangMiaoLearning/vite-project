import React, { ReactNode, useState } from 'react';
import './Mouse.scss';

const Mouse: React.FC<{
	render: (data: { x: number; y: number }) => ReactNode;
}> = (props) => {
	const [state, setState] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

	function handleMouseMove(e: any) {
		setState({ x: e.clientX, y: e.clientY });
	}

	return (
		<div className="mouse-tracker" onMouseMove={handleMouseMove}>
			{props.render(state)}
			<p>
				鼠标的位置：（{state.x},{state.y}）
			</p>
		</div>
	);
};
export default Mouse;
