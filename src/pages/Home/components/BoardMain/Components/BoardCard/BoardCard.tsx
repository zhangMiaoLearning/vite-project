import React from 'react';
import { Avatar, Card, Form } from 'antd';
import styles from './BoardCard.module.scss';
import { useCardAction } from './hooks/hooks';
import DeleteCardModal from './DeleteCardModal/DeleteCardModal';
import { CardTitle } from './CardTitle/CardTitle';
import { CardEditActions } from './CardEditAction/CardEditAction';
import { CardAction } from './CardAction/CardAction';
import { CardRate } from './CardRate/CardRate';
import { CardDescription } from './CardDescription/CardDescription';

export interface BoardCardProps {
	id: string;
	title: string;
	description: string;
	rate: number;
	updateAt: string | null;
	userName: string | null;
}

const BoardCard: React.FC<BoardCardProps> = (props) => {
	const {
		isEdit,
		isUser,
		onCloseEdit,
		onOpenEdit,
		onOpenDeleteModal,
		form,
		onFinish,
		isDeleteModalOpen,
		handleDelete,
	} = useCardAction(props);

	return (
		<div className={styles.card} key={props.id}>
			<Form form={form} onFinish={onFinish}>
				<Card
					title={
						<div className={styles.title}>
							<CardTitle isEdit={isEdit} title={props.title} />
							<section className={styles.user}>
								<Avatar className={styles.userColor}>{props.userName}</Avatar>
								<div className={styles.updateTime}>{props.updateAt}</div>
							</section>
						</div>
					}
					actions={
						isUser
							? isEdit
								? [
										<CardEditActions
											key={props.id}
											onCloseEdit={onCloseEdit}
											okText={'保存'}
										/>,
								  ]
								: [
										<CardAction
											key={props.id}
											onOpenEdit={onOpenEdit}
											onOpenDeleteModal={onOpenDeleteModal}
										/>,
								  ]
							: []
					}
				>
					<CardDescription isEdit={isEdit} description={props.description} />
					<CardRate isEdit={isEdit} rate={props.rate} />
				</Card>
			</Form>
			<DeleteCardModal
				isDeleteModalOpen={isDeleteModalOpen}
				handleDelete={handleDelete}
				onOpenDeleteModal={onOpenDeleteModal}
			/>
		</div>
	);
};
export default BoardCard;
