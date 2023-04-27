import React from 'react';
import { CalculatorButton } from './calculatorButton';
import { CalculatorDisplay } from './calculatorDisplay';
import { Provider } from 'react-redux';
import { store } from '../../../../utils/Store/Store';
export const ReduxDemo = () => {
	return (
		<Provider store={store}>
			<div>
				<CalculatorButton />
				<CalculatorDisplay />
			</div>
		</Provider>
	);
};
