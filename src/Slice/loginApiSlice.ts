import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface loginInformation {
	username: string;
	password: string;
}
export const loginApiSlice = createApi({
	reducerPath: 'loginApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
	tagTypes: ['login'],
	endpoints: (builder) => ({
		login: builder.query<loginInformation, loginInformation>({
			query: (values) => ({
				url: `/users?username=${values.username}&pwd=${values.password}`,
			}),
			providesTags: ['login'],
		}),
		register: builder.mutation({
			query: (values) => ({
				url: 'users',
				method: 'POST',
				body: {
					username: values.userName,
					pwd: values.password,
				},
			}),
			invalidatesTags: ['login'],
		}),
		valid: builder.query<loginInformation, string>({
			query: (username) => ({
				url: '/users' + `?username=${username}`,
			}),
			providesTags: ['login'],
		}),
	}),
});
export const { useLoginQuery, useRegisterMutation, useValidQuery } =
	loginApiSlice;
