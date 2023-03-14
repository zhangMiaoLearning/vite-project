import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const BoardCard = () => {
	return (
		<>
			<Card title="Card title" extra={<a href="/Home">More</a>}>
				<Meta
					avatar={
						<img
							alt="example"
							src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
						/>
					}
					description="This is the description"
				/>
			</Card>
		</>
	);
};
export default BoardCard;
