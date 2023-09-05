import { Routes, Route } from 'react-router-dom';
import { CreateSignInPage } from './pages/signin/CreateSigninPage';
import { CreateSignUpPage } from './pages/signup/CreateSignupPage';
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

	const sendFalseToLocalStorage = () => {
		window.localStorage.clear('user');
	};

	const user = localStorage.getItem('user');

	const sendTrueToLocalStorage = () => {
		window.localStorage.setItem('user', true);
	};

	return (
		<Routes>
			<Route path='/login' element={<CreateSignInPage />} />
			<Route path='/register' element={<CreateSignUpPage />} />

			<Route
				path='*'
				element={
					<NotFound
						sendFalseToLocalStorage={sendFalseToLocalStorage}
						user={user}
						sendTrueToLocalStorage={sendTrueToLocalStorage}
					/>
				}
			/>

			<Route
				path='/'
				element={
					<ProtectedRoute>
						<Home
							sendFalseToLocalStorage={sendFalseToLocalStorage}
							user={user}
							sendTrueToLocalStorage={sendTrueToLocalStorage}
							isLoading={isLoading}
						/>
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
						<Category
							sendFalseToLocalStorage={sendFalseToLocalStorage}
							user={user}
							sendTrueToLocalStorage={sendTrueToLocalStorage}
						/>
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
};
