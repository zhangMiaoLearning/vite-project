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
import { useHeader } from './pages/Components/Header/hooks';
import { items } from './pages/Components/Header/HeaderMenu';

function App() {
	const { userName, showHeader } = useHeader();
	return (
		<Provider store={store}>
			<Mouse render={(mouse) => <Heart mouse={mouse} />}>
				<GlobalProvider>
					<BrowserRouter>
						<Suspense fallback={<LazyModule />}>
							<Header
								userName={userName}
								showHeader={showHeader}
								items={items}
							/>
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
