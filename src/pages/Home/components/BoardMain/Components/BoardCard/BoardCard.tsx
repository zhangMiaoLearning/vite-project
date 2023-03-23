import React, { useState } from 'react';
import { Avatar, Button, Card, Form, Input, Modal, Rate } from 'antd';
import Meta from 'antd/es/card/Meta';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import styles from './BoardCard.module.scss';
import { UpdateCardInformation } from '../../../../../../Api/Card/UpdateCardInformation';
import { timeTransformation } from '../../../../../../Utils/getTime';
import { DeleteCard } from '../../../../../../Api/Card/DeleteCard';

interface BoardCardProps {
	id: string;
	title: string;
	description: string;
	rate: number;
	updateAt: string | null;
	userName: string | null;
}

const BoardCard: React.FC<BoardCardProps> = (props) => {
	const [isEdit, setIsEdit] = useState(false);
	const [editId, setEditId] = useState('');
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const date = timeTransformation(new Date());
	const [form] = Form.useForm();

	function onFinish(values: {
		title: string;
		description: string;
		rate: number;
	}) {
		UpdateCardInformation(props.id, values, date).then();
		setIsEdit(false);
		PubSub.publish('refreshCardList');
	}

	function handleDelete() {
		DeleteCard(props.id).then();
		PubSub.publish('refreshCardList');
	}

	return (
		<div className={styles.card} key={props.id}>
			<Form form={form} onFinish={onFinish}>
				<Card
					title={
						<div className={styles.title}>
							<Form.Item
								name={'title'}
								initialValue={props.title}
								style={{ margin: 0 }}
							>
								{editId == props.id && isEdit ? (
									<Input placeholder={`请输入标题`} />
								) : (
									`${props.title}`
								)}
							</Form.Item>
							<section className={styles.user}>
								<Avatar className={styles.userColor}>{props.userName}</Avatar>
								<div className={styles.updateTime}>{props.updateAt}</div>
							</section>
						</div>
					}
					actions={
						editId == props.id && isEdit
							? [
									<Form.Item key={'save-button'} style={{ margin: 0 }}>
										<Button type="primary" htmlType="submit">
											保存
										</Button>
									</Form.Item>,
									<Form.Item key={'cancel-button'} style={{ margin: 0 }}>
										<Button onClick={() => setIsEdit(false)}>取消</Button>
									</Form.Item>,
							  ]
							: [
									<EditOutlined
										key="edit"
										onClick={() => {
											setEditId(props.id);
											setIsEdit(true);
										}}
									/>,
									<DeleteOutlined
										key={'delete-button'}
										onClick={() => setIsDeleteModalOpen(true)}
									/>,
							  ]
					}
				>
					<Meta
						description={
							<Form.Item name={'description'} initialValue={props.description}>
								{editId == props.id && isEdit ? (
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
					<Form.Item
						name={'rate'}
						initialValue={props.rate}
						style={{ margin: 0 }}
					>
						<Rate disabled={!isEdit} />
					</Form.Item>
				</Card>
			</Form>
			<Modal
				title="删除卡片"
				open={isDeleteModalOpen}
				onOk={handleDelete}
				onCancel={() => setIsDeleteModalOpen(false)}
				okText="删除"
				cancelText="取消"
				centered
			>
				<p>确认删除这条说说吗？</p>
			</Modal>
		</div>
	);
};
export default BoardCard;
