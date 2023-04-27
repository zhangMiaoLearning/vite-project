import React from 'react';
import './App.module.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LazyModule from './pages/components/LazyModule';
import ROUTES from './router/routes';
import Header from './pages/components/header/Header';
import GlobalProvider from './utils/Store/GlobalProvider';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import Mouse from './pages/components/mouseTracker/Mouse';
import Heart from './pages/components/mouseTracker/Heart';

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
