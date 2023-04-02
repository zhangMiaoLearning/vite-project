import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardDescription } from './CardDescription';
import React from 'react';

describe('CardDescription', function () {
	it('should render', function () {
		const { container } = render(<CardDescription isEdit={true} />);
		expect(container).toBeInTheDocument();
	});
});
