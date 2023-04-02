import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCard from './AddCard';
import React from 'react';

describe('AddCard', function () {
	it('should render', function () {
		const onFinish = jest.fn();
		const onCancel = jest.fn();
		const { container } = render(
			<AddCard onFinish={onFinish} onCancel={onCancel} />
		);
		expect(container).toBeInTheDocument();
	});
});
