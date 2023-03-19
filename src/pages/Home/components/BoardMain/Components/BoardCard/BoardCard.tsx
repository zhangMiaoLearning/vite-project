import React, { useState } from 'react';
import { Button, Card, Form, Input, Rate } from 'antd';
import Meta from 'antd/es/card/Meta';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import styles from './BoardCard.module.scss';
import { UpdateCardInformation } from '../../../../../../Api/UpdateCardInformation';

interface BoardCardProps {
	id: string;
	title: string;
	description: string;
	rate: number;
}

const BoardCard: React.FC<BoardCardProps> = (props) => {
	const [isEdit, setIsEdit] = useState(false);
	const [editId, setEditId] = useState('');
	const date = new Date();
	const [form] = Form.useForm();

	function onFinish(values: {
		title: string;
		description: string;
		rate: number;
	}) {
		UpdateCardInformation(props.id, values, date).then();
		setIsEdit(false);
	}

	return (
		<div className={styles.card} key={props.id}>
			<Form form={form} onFinish={onFinish}>
				<Card
					title={
						<Form.Item name={'title'} initialValue={props.title}>
							{editId == props.id && isEdit ? (
								<Input placeholder={`请输入标题`} />
							) : (
								`${props.title}`
							)}
						</Form.Item>
					}
					actions={
						editId == props.id && isEdit
							? [
									<Form.Item key={'save-button'}>
										<Button type="primary" htmlType="submit">
											保存
										</Button>
									</Form.Item>,
									<Form.Item key={'cancel-button'}>
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
									<DeleteOutlined key={'delete-button'} />,
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
					<Form.Item name={'rate'} initialValue={props.rate}>
						<Rate disabled={!isEdit} />
					</Form.Item>
				</Card>
			</Form>
		</div>
	);
};
export default BoardCard;
