import { render } from '@testing-library/react';
import BoardMain from './BoardMain';
import React from 'react';

describe('BoardMain cardList', function () {
	it('should render', function () {
		const { container } = render(<BoardMain />);
		expect(container).toBeInTheDocument();
	});
});
