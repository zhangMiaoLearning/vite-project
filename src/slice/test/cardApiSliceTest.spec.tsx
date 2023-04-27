import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { useSearchCardQuery } from '../cardApiSlice';
import React from 'react';
import { store } from '../../store/Store';

const server = setupServer(
	rest.get('http://localhost:3004/card', (req, res, ctx) => {
		const title_like = req.url.searchParams.get('title_like');
		if (title_like === 'test') {
			return res(
				ctx.json([
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
				])
			);
		} else {
			return res(ctx.status(404));
		}
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('cardApiSlice', () => {
	describe('useSearchCardQuery', () => {
		it('should return the correct data', async () => {
			const wrapper: React.FC<{ children: React.ReactNode }> = ({
				children,
			}) => <Provider store={store}>{children}</Provider>;

			const { result, waitFor } = renderHook(() => useSearchCardQuery('test'), {
				wrapper,
			});

			await waitFor(() => result.current.isSuccess, { timeout: 3000 });

			expect(result.current.data).toEqual([
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
			]);
		});

		it('should return an error for an invalid search term', async () => {
			const wrapper: React.FC<{ children: React.ReactNode }> = ({
				children,
			}) => <Provider store={store}>{children}</Provider>;
			const { result, waitFor } = renderHook(
				() => useSearchCardQuery('invalid'),
				{
					wrapper,
				}
			);

			await waitFor(() => result.current.isError, { timeout: 3000 });

			expect(result.current.error).toBeDefined();
		});
	});
});
