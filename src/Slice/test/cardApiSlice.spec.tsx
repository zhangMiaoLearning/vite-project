import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useSearchCardQuery } from '../cardApiSlice';
import React from 'react';

const mockStore = configureStore([]);

describe('cardApiSlice', () => {
	describe('useSearchCardQuery', () => {
		it('should return the correct data', async () => {
			const mockCards = [
				{
					id: '1',
					title: 'Test Card 1',
					description: 'This is a test card.',
					rate: 3,
					updateAt: '2022-04-15T10:30:00.000Z',
					userName: null,
				},
				{
					id: '2',
					title: 'Test Card 2',
					description: 'This is another test card.',
					rate: 5,
					updateAt: '2022-04-16T10:30:00.000Z',
					userName: null,
				},
			];

			const store = mockStore({});
			const wrapper: React.FC<{ children: React.ReactNode }> = ({
				children,
			}) => <Provider store={store}>{children}</Provider>;

			const { result, waitFor } = renderHook(() => useSearchCardQuery('test'), {
				wrapper,
			});

			await waitFor(() => result.current.isSuccess, { timeout: 3000 });

			expect(result.current.data).toEqual(mockCards);
		});
	});
});
