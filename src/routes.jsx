import { Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/auth/AuthPage';
import { Home } from './pages/main/MainPage';
import React, {
	useState,
	useEffect,
	createContext,
	useRef,
	useCallback,
} from 'react';
import { NotFound } from './pages/not-found/NotFound';
import { FavoriteTracks } from './pages/favoriteTracks/FavoriteTracks';
import { Category } from './pages/category/Category';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';
import { fetchTodos, toggleLikedId } from './redux/slice/todo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteTodos } from './redux/slice/favoriteTodo';
import { fetchDeleteFavoriteTrack } from './redux/slice/deleteFavoriteTrack';
import { fetchAddFavoriteTrack } from './redux/slice/addFavoriteTrack';

export const NavMenuContext = createContext(null);

export const PersonalNameContext = createContext({
	userName: null,
	setUserName: () => {},
});

export const AppRoutes = () => {
	const [userName, setUserName] = useState(localStorage.getItem('user'));

	const value = { userName, setUserName };

	const audioRef = useRef();

	const [timeProgress, setTimeProgress] = useState(0);

	const progressBarRef = useRef();

	const [duration, setDuration] = useState(0);

	const [loop, setLoop] = useState(false);

	const [volume, setVolume] = useState(2);

	const [stop, setStop] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const [selectedTrackId, setSelectedTrackId] = useState(null);

	const playAnimationRef = useRef();

	const { isPlaying, currentPlayer, todos, error } = useSelector(
		state => state.todos
	);

	const { favoriteTodos } = useSelector(state => state.favoriteTodos);

	const dispatch = useDispatch();

	useEffect(() => {
		if (audioRef && audioRef.current) {
			audioRef.current.loop = loop;
		}
	}, [loop, audioRef]);

	useEffect(() => {
		if (audioRef && audioRef?.current) {
			audioRef.current.volume = volume / 100;
		}
	});

	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
		setTimeProgress(audioRef.current.currentTime);
	};

	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	const removeUser = () => {
		localStorage.removeItem('user');
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

	

	const repeat = useCallback(() => {
		if (audioRef && audioRef.current) {
			const currentTime = audioRef.current.currentTime;
			setTimeProgress(currentTime);
			progressBarRef.current.value = currentTime;
			progressBarRef.current.style.setProperty(
				'--range-progress',
				`${(progressBarRef.current.value / duration) * 100}%`
			);
		}

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	useEffect(() => {
		if (isPlaying) {
			audioRef?.current?.pause();
			setStop(false);
		} else {
			audioRef?.current?.play();
			setStop(true);
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, repeat]);

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
									isPlaying={isPlaying}
									audioRef={audioRef}
									progressBarRef={progressBarRef}
									duration={duration}
									timeProgress={timeProgress}
									setTimeProgress={setTimeProgress}
									handleProgressChange={handleProgressChange}
									volume={volume}
									setVolume={setVolume}
									onLoadedMetadata={onLoadedMetadata}
									loop={loop}
									setLoop={setLoop}
									currentPlayer={currentPlayer}
									todos={todos}
									error={error}
									
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
									setSelectedTrackId={setSelectedTrackId}
									selectedTrackId={selectedTrackId}
									isPlaying={isPlaying}
									audioRef={audioRef}
									progressBarRef={progressBarRef}
									duration={duration}
									timeProgress={timeProgress}
									setTimeProgress={setTimeProgress}
									handleProgressChange={handleProgressChange}
									volume={volume}
									setVolume={setVolume}
									onLoadedMetadata={onLoadedMetadata}
									loop={loop}
									setLoop={setLoop}
									currentPlayer={currentPlayer}
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
								<Category />
							</NavMenuContext.Provider>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</PersonalNameContext.Provider>
	);
};
