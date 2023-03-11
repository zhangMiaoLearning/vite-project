import React from 'react';
import './App.module.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LazyModule from './pages/Components/LazyModule';
import ROUTES from './Router/routes';

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<LazyModule />}>
				<Routes>
					{ROUTES.map((route) => (
						<Route
							key={route.key}
							path={route.path}
							element={<route.element />}
						/>
					))}
					<Route path="/*" element={<Navigate to="/login" replace />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
