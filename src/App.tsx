import React from 'react';
import './App.module.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LazyModule from './pages/Components/LazyModule';
import ROUTES from './Router/routes';
import Header from './pages/Components/Header/Header';
import GlobalProvider from './Utils/Store/GlobalProvider';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import Mouse from './pages/Components/MouseTracker/Mouse';
import Heart from './pages/Components/MouseTracker/Heart';

function App() {
	return (
		<Provider store={store}>
			<Mouse render={(mouse) => <Heart mouse={mouse} />}>
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
			</Mouse>
		</Provider>
	);
}
export default App;
