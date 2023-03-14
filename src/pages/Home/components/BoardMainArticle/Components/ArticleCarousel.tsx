import React from 'react';
import { Carousel } from 'antd';
const ArticleCarousel = () => {
	const contentStyle: React.CSSProperties = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	};
	return (
		<div className="board-main-top">
			<Carousel autoplay dotPosition="bottom" style={{ width: '500px' }}>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>
		</div>
	);
};
export default ArticleCarousel;
