import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { CardRate } from './CardRate';

describe('CardRate', function () {
	it('should render', function () {
		const { container } = render(<CardRate isEdit={true} />);
		expect(container).toBeInTheDocument();
	});
});
