import React from 'react';
import './App.module.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LazyModule from './pages/Components/LazyModule';
import ROUTES from './Router/routes';
import Header from './pages/Components/Header/Header';
import GlobalProvider from './Utils/Store/GlobalProvider';

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Suspense fallback={<LazyModule />}>
					<Header />
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
		</GlobalProvider>
	);
}

export default App;
