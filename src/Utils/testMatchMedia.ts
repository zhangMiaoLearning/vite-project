import { server } from '../__mock__/server';
import '@testing-library/jest-dom';
import { cardApiSlice } from '../Slice/cardApiSlice';
import { store } from '../Store/Store';

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});
beforeAll(() => {
	server.listen({});
});

afterEach(() => {
	// server.resetHandlers();
	// This is the solution to clear RTK Query cache after each test
	store.dispatch(cardApiSlice.util.resetApiState());
});

afterAll(() => server.close());
