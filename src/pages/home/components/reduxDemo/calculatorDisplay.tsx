import React from 'react';
import { useSelector } from 'react-redux';
export const CalculatorDisplay = () => {
	const number: string = useSelector((state: any) => state.value);
	return <div>{number}</div>;
};
