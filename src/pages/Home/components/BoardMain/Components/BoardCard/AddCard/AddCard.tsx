import React from 'react';
import { Button, Card, Form, Input, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Meta from 'antd/es/card/Meta';
import styles from './AddCard.module.scss';
import { useAddCard } from './hooks';

const AddCard = () => {
	const { form, onFinish, onCancel } = useAddCard();

	return (
		<div className={styles.card}>
			<div className={styles.title}>新增一条说说</div>
			<Form form={form} onFinish={onFinish}>
				<Card
					title={
						<Form.Item name={'title'} style={{ margin: 0 }}>
							<Input placeholder={`请输入标题`} />
						</Form.Item>
					}
					actions={[
						<Form.Item key={'save-button'} style={{ margin: 0 }}>
							<Button type="primary" htmlType="submit">
								添加
							</Button>
						</Form.Item>,
						<Form.Item key={'cancel-button'} style={{ margin: 0 }}>
							<Button onClick={onCancel}>取消</Button>
						</Form.Item>,
					]}
				>
					<Meta
						description={
							<Form.Item name={'description'}>
								<TextArea
									placeholder={`请输入卡片内容`}
									showCount
									maxLength={100}
								/>
							</Form.Item>
						}
					/>
					<Form.Item name={'rate'} style={{ margin: 0 }}>
						<Rate />
					</Form.Item>
				</Card>
			</Form>
		</div>
	);
};
export default AddCard;
