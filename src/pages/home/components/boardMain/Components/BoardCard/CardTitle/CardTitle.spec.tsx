import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { CardTitle } from './CardTitle';

describe('CardTitle', function () {
	it('should render', function () {
		const { container } = render(<CardTitle isEdit={true} />);
		expect(container).toBeInTheDocument();
	});
});
