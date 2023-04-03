import { render } from '@testing-library/react';
import BoardMain from './BoardMain';
import React from 'react';
import { StoreWrapper } from '../../../../Utils/wrapperTest';
import '@testing-library/jest-dom';


describe('BoardMain cardList', function() {
	it('should render', function() {
		const { container } = render(
			<StoreWrapper>
				<BoardMain />
			</StoreWrapper>,
		);
		expect(container).toBeInTheDocument();
	});
});
