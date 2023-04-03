import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import BoardCard from './BoardCard';
import { StoreWrapper } from '../../../../../../Utils/wrapperTest';


describe('BoardCard', function() {
	it('should render', function() {
		const { container } = render(
			<StoreWrapper>
				<BoardCard id={'1'} title={'1'} description={'1'} rate={1} updateAt={'1'} userName={'1'} />
			</StoreWrapper>,
		);
		expect(container).toBeInTheDocument();
	});
});
