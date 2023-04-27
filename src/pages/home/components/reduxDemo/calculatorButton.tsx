import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../../../utils/Action/Action';

export const CalculatorButton = () => {
	const dispatch = useDispatch();
	const handleIncrement = () => {
		dispatch({ type: INCREMENT });
	};
	const handleDecrement = () => {
		dispatch({ type: DECREMENT });
	};

	return (
		<div>
			<Button onClick={handleIncrement}>+</Button>
			<Button onClick={handleDecrement}>-</Button>
		</div>
	);
};
