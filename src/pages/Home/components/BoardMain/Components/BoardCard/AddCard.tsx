import React from 'react';
import { Button, Card, Form, Input, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Meta from 'antd/es/card/Meta';
import { PostCard } from '../../../../../../Api/Card/PostCard';
import styles from './AddCard.module.scss';
import { timeTransformation } from '../../../../../../Utils/getTime';
import { useDispatch } from 'react-redux';

const AddCard = () => {
	const [form] = Form.useForm();
	const date = timeTransformation(new Date());
	const uerName = sessionStorage.getItem('userName');

	// const dispatch = useDispatch();
	function onFinish(values: {
		title: string;
		description: string;
		rate: number;
	}) {
		PostCard(values, date, uerName).then();
		form.resetFields();
		PubSub.publish('refreshCardList');
		// dispatch(
		// 	addCard({
		// 		id: '2',
		// 		title: values.title,
		// 		rate: values.rate,
		// 		description: values.description,
		// 		updateAt: date,
		// 	})
		// );
	}
	const onCancel = () => {
		form.resetFields();
	};

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
