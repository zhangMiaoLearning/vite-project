import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/Store';
import React from 'react';

export const StoreWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
