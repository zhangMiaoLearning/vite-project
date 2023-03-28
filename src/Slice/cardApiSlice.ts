import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Card {
	id: string;
	title: string;
	description: string;
	rate: number;
	updateAt: string;
	userName: string;
}
export const cardApiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
	tagTypes: ['card'],
	endpoints: (builder) => ({
		addCard: builder.mutation<
			void,
			{
				title: string;
				description: string;
				rate: number;
				updateAt: string | null;
				userName: string | null;
			}
		>({
			query: (value) => ({
				url: '/card',
				method: 'POST',
				body: {
					title: value.title,
					description: value.description,
					rate: value.rate,
					updateAt: value.updateAt,
					userName: value.userName,
				},
			}),
			invalidatesTags: ['card'],
		}),
		updateCard: builder.mutation<
			void,
			{
				id: string;
				title: string;
				description: string;
				rate: number;
				updateAt: string | null;
				userName: string | null;
			}
		>({
			query: (value) => ({
				url: '/card' + `/${value.id}`,
				method: 'PATCH',
				body: {
					title: value.title,
					description: value.description,
					rate: value.rate,
					updateAt: value.updateAt,
					userName: value.userName,
				},
			}),
			invalidatesTags: ['card'],
		}),
		deleteCard: builder.mutation({
			query: (id) => ({
				url: '/card' + `/${id}`,
				method: 'DELETE',
				body: id,
			}),
			invalidatesTags: ['card'],
		}),
		searchCard: builder.query<Card[], string>({
			query: (value) => ({
				url: `/card?title_like=${value}`,
			}),
			providesTags: ['card'],
		}),
	}),
});
export const {
	useAddCardMutation,
	useUpdateCardMutation,
	useDeleteCardMutation,
	useSearchCardQuery,
} = cardApiSlice;
