import { Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/auth/AuthPage';
import { Home } from './pages/main/MainPage';
import React, { useState, useEffect, createContext } from 'react';
import { NotFound } from './pages/not-found/NotFound';
import { FavoriteTracks } from './pages/favoriteTracks/FavoriteTracks';
import { Category } from './pages/category/Category';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

export const NavMenuContext = createContext(null);

export const PersonalNameContext = createContext({
	userName: null,
	setUserName: () => {},
});

export const AppRoutes = () => {
	const [userName, setUserName] = useState(localStorage.getItem('user'));

	const value = { userName, setUserName };

	// const userName = localStorage.getItem('user');

	const removeUser = () => {
		localStorage.removeItem('user');
	};

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 1500);
	}, []);

	return (
		<PersonalNameContext.Provider value={value}>
			<Routes>
				<Route path='/login' element={<AuthPage isLoginMode={true} />}></Route>
				<Route
					path='/register'
					element={<AuthPage isLoginMode={false} />}
				></Route>

				<Route
					path='*'
					element={
						<NavMenuContext.Provider value={removeUser}>
							<NotFound />
						</NavMenuContext.Provider>
					}
				/>

				<Route
					path='/'
					element={
						<ProtectedRoute>
							<NavMenuContext.Provider value={removeUser}>
								<Home isLoading={isLoading} />
							</NavMenuContext.Provider>
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
							<NavMenuContext.Provider value={removeUser}>
								<Category />
							</NavMenuContext.Provider>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</PersonalNameContext.Provider>
	);
};
