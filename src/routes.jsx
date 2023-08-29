import { Routes, Route } from 'react-router-dom';
import CreateSignInPage from './pages/signin/CreateSigninPage';
import CreateSignUpPage from './pages/signup/CreateSignupPage';
import Home from './pages/main/MainPage';
import React, { useState, useEffect } from 'react';
import NotFound from './pages/not-found/NotFound';
import FavoriteTracks from './pages/favoriteTracks/FavoriteTracks';
import Category from './pages/category/Category';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

export const AppRoutes = ({ isAllowed }) => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 2000);
	}, []);

	return (
		<Routes>
			<Route path='/login' element={<CreateSignInPage />} />
			<Route path='/register' element={<CreateSignUpPage />} />

			<Route path='*' element={<NotFound />} />

			<Route
				element={<ProtectedRoute />}
			>
				<Route path='/' element={<Home isLoading={isLoading} />} />
				<Route path='/favorite' element={<FavoriteTracks />} />
				<Route path='/category/:id' element={<Category />} />
			</Route>
		</Routes>
	);
};
