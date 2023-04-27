import { render } from '@testing-library/react';
import { CardAction } from './CardAction';
import '@testing-library/jest-dom';
import React from 'react';

describe('CardAction', function () {
	it('should render', function () {
		const mockOpenModalFn = jest.fn();
		const mockOpenEditFn = jest.fn();
		const { container } = render(
			<CardAction
				onOpenDeleteModal={mockOpenModalFn}
				onOpenEdit={mockOpenEditFn}
			/>
		);
		expect(container).toBeInTheDocument();
	});
});
