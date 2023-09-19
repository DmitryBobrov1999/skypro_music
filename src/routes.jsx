import { Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/auth/AuthPage';
import { Home } from './pages/main/MainPage';
import React, { useState, useEffect } from 'react';
import { NotFound } from './pages/not-found/NotFound';
import { FavoriteTracks } from './pages/favoriteTracks/FavoriteTracks';
import { Category } from './pages/category/Category';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

export const AppRoutes = () => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 1500);
	}, []);

	return (
		<Routes>
			<Route
				path='/login'
				element={<AuthPage isLoginMode={true}></AuthPage>}
			></Route>
			<Route
				path='/register'
				element={<AuthPage isLoginMode={false}></AuthPage>}
			></Route>

			<Route path='*' element={<NotFound />} />

			<Route
				path='/'
				element={
					<ProtectedRoute>
						<Home isLoading={isLoading} />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/favorite'
				element={
					<ProtectedRoute>
						<FavoriteTracks />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/category/:id'
				element={
					<ProtectedRoute>
						<Category />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
};
