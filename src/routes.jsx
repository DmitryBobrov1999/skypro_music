import { Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/auth/AuthPage';
import { Home } from './pages/main/MainPage';
import React, { useState, useEffect, createContext, useRef } from 'react';
import { NotFound } from './pages/not-found/NotFound';
import { FavoriteTracks } from './pages/favoriteTracks/FavoriteTracks';
import { Category } from './pages/category/Category';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';
import {
	setCurrentTrack,
	toggleCategoryLikedId,
	toggleFavoriteLikedId,
	toggleLikedId,
} from './redux/slice/todoSlice';
import { fetchTodos } from './api/todosApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteTodos } from './api/favoriteTodosApi';
import { fetchDeleteFavoriteTrack } from './api/deleteFavoriteTrackApi';
import { fetchAddFavoriteTrack } from './api/addFavoriteTrackApi';
import { CreateAudioPlayer } from './components/audioPlayer/AudioPlayer';
import { fetchCategoryTodos } from './api/categoryTodosApi';


export const NavMenuContext = createContext(null);

export const PersonalNameContext = createContext({
	userName: null,
	setUserName: () => {},
});

export const AppRoutes = () => {
	const [userName, setUserName] = useState(localStorage.getItem('user'));

	const value = { userName, setUserName };

	const audioRef = useRef();

	const [stop, setStop] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const [selectedTrackId, setSelectedTrackId] = useState(null);

	const {
		isPlaying,
		todos,
		error,
		favoriteTodos,
		favError,
		categoryTodos,
		catError,
		todosValue,
	} = useSelector(state => state.trackList);



	const [favTodosValue, setFavTodosValue] = useState('');

	const dispatch = useDispatch();

	const removeUser = () => {
		localStorage.removeItem('user');
	};

	const openPlayer = track => {
		dispatch(setCurrentTrack(track));
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 1000);
	}, []);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchFavoriteTodos());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchCategoryTodos());
	}, [dispatch]);

	const formatTime = time => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const seconds = Math.floor(time % 60);
			const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${formatMinutes}:${formatSeconds}`;
		}
		return '00:00';
	};

	useEffect(() => {
		if (isPlaying) {
			setStop(false);
		} else {
			setStop(true);
		}
	}, [isPlaying, audioRef]);

	const addTrackWithId = trackId => {
		dispatch(fetchAddFavoriteTrack(trackId));
	};

	const deleteTrackWithId = trackId => {
		dispatch(fetchDeleteFavoriteTrack(trackId));
	};

	const handleLikeClick = trackId => {
		dispatch(toggleLikedId(trackId));
	};

	const handleFavoriteLikeClick = trackId => {
		dispatch(toggleFavoriteLikedId(trackId));
	};

	const handleCategoryLikeClick = trackId => {
		dispatch(toggleCategoryLikedId(trackId));
	};

	const filteredTodos = todos.filter(track => {
		return track.name.toLowerCase().includes(todosValue.toLowerCase());
	});

	const filteredFavoriteTodos = favoriteTodos.filter(track => {
		return track.name.toLowerCase().includes(favTodosValue.toLowerCase());
	});

	

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
								<Home
									isLoading={isLoading}
									stop={stop}
									setSelectedTrackId={setSelectedTrackId}
									selectedTrackId={selectedTrackId}
									todos={todos}
									error={error}
									addTrackWithId={addTrackWithId}
									deleteTrackWithId={deleteTrackWithId}
									handleLikeClick={handleLikeClick}
									favoriteTodos={favoriteTodos}
									formatTime={formatTime}
									openPlayer={openPlayer}
									favError={favError}
									categoryTodos={categoryTodos}
									filteredTodos={filteredTodos}
									catError={catError}
								/>
								<CreateAudioPlayer
									selectedTrackId={selectedTrackId}
									setSelectedTrackId={setSelectedTrackId}
									filteredTodos={filteredTodos}
									filteredFavoriteTodos={filteredFavoriteTodos}
									handleLikeClick={handleLikeClick}
									addTrackWithId={addTrackWithId}
									deleteTrackWithId={deleteTrackWithId}
									favoriteTodos={favoriteTodos}
								/>
							</NavMenuContext.Provider>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/favorite'
					element={
						<ProtectedRoute>
							<NavMenuContext.Provider value={removeUser}>
								<FavoriteTracks
									isLoading={isLoading}
									stop={stop}
									error={error}
									setSelectedTrackId={setSelectedTrackId}
									selectedTrackId={selectedTrackId}
									favoriteTodos={favoriteTodos}
									handleFavoriteLikeClick={handleFavoriteLikeClick}
									deleteTrackWithId={deleteTrackWithId}
									addTrackWithId={addTrackWithId}
									formatTime={formatTime}
									openPlayer={openPlayer}
									favError={favError}
									filteredFavoriteTodos={filteredFavoriteTodos}
									setFavTodosValue={setFavTodosValue}
									catError={catError}
								/>
								<CreateAudioPlayer
									selectedTrackId={selectedTrackId}
									setSelectedTrackId={setSelectedTrackId}
									// filteredTodos={filteredTodos}
									filteredFavoriteTodos={filteredFavoriteTodos}
									handleLikeClick={handleLikeClick}
									addTrackWithId={addTrackWithId}
									deleteTrackWithId={deleteTrackWithId}
									favoriteTodos={favoriteTodos}
								/>
							</NavMenuContext.Provider>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/category/:id'
					element={
						<ProtectedRoute>
							<NavMenuContext.Provider value={removeUser}>
								<Category
									categoryTodos={categoryTodos}
									formatTime={formatTime}
									openPlayer={openPlayer}
									setSelectedTrackId={setSelectedTrackId}
									selectedTrackId={selectedTrackId}
									stop={stop}
									favoriteTodos={favoriteTodos}
									deleteTrackWithId={deleteTrackWithId}
									addTrackWithId={addTrackWithId}
									handleCategoryLikeClick={handleCategoryLikeClick}
									favError={favError}
									catError={catError}
									error={error}
								/>
								<CreateAudioPlayer
									selectedTrackId={selectedTrackId}
									setSelectedTrackId={setSelectedTrackId}
									// filteredTodos={filteredTodos}
									filteredFavoriteTodos={filteredFavoriteTodos}
									handleLikeClick={handleLikeClick}
									addTrackWithId={addTrackWithId}
									deleteTrackWithId={deleteTrackWithId}
									favoriteTodos={favoriteTodos}
								/>
							</NavMenuContext.Provider>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</PersonalNameContext.Provider>
	);
};
