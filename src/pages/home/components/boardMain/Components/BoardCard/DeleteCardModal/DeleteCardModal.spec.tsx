import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import DeleteCardModal from './DeleteCardModal';

describe('DeleteCardModal', function () {
	it('should render', function () {
		const handleDelete = jest.fn();
		const onOpenDeleteModal = jest.fn();
		const { container } = render(
			<DeleteCardModal
				isDeleteModalOpen={true}
				handleDelete={handleDelete}
				onOpenDeleteModal={onOpenDeleteModal}
			/>
		);
		expect(container).toBeInTheDocument();
	});
});
