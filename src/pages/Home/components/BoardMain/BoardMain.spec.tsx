import { render } from '@testing-library/react';
import BoardMain from './BoardMain';
import React from 'react';
import { StoreWrapper } from '../../../../Utils/wrapperTest';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useCardList } from './hooks';


describe('BoardMain cardList', function() {
	it('should render', function() {
		const { container } = render(
			<StoreWrapper>
				<BoardMain />
			</StoreWrapper>,
		);
		expect(container).toBeInTheDocument();
	});

	it('should default empty list',function(){
		const { result } = renderHook(() => useCardList(),{wrapper:StoreWrapper});
		expect(result.current.list).toEqual([]);
	});
});
