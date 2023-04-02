import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { CardEditActions } from './CardEditAction';

describe('CardEditAction', function () {
	it('should render', function () {
		const { container } = render(<CardEditActions okText={'保存'} />);
		expect(container).toBeInTheDocument();
	});
});
