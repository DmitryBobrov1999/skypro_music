import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CreateAudioPlayer } from '../../components/audioPlayer/AudioPlayer';
import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateTracklist } from '../../components/tracklist/Tracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';

import { getTracks } from '../../api/tracks';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';

export const Home = ({
	isLoading,
	sendFalseToLocalStorage,
	sendTrueToLocalStorage,
	user,
}) => {
	const [tracks, setTracks] = useState([]);

	const [currentPlayer, toCurrentPlayer] = useState(null);

	const [addTodoError, setAddTodoError] = useState(null);

	const [isPlaying, setIsPlaying] = useState(false);

	const [duration, setDuration] = useState(0);

	const [timeProgress, setTimeProgress] = useState(0);

	const [loop, setLoop] = useState(false);

	const [volume, setVolume] = useState(20);

	const audioRef = useRef();

	const progressBarRef = useRef();

	const playAnimationRef = useRef();

	useEffect(() => {
		if (audioRef && audioRef.current) {
			audioRef.current.loop = loop;
		}
	}, [loop, audioRef]);

	useEffect(() => {
		getTracks()
			.then(tracks => {
				setTracks(tracks);
			})
			.catch(error => {
				setAddTodoError(
					`Не удалось загрузить плейлист, попробуйте позже: ${error.message}`
				);
			});
	}, []);

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
		} else {
			audioRef?.current?.play();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, repeat]);

	useEffect(() => {
		if (audioRef && audioRef.current) {
			audioRef.current.volume = volume / 100;
		}
	}, [volume, audioRef]);

	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
		setTimeProgress(audioRef.current.currentTime);
	};

	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	const openPlayer = track => {
		toCurrentPlayer(track);
	};

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

	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu
						user={user}
						sendTrueToLocalStorage={sendTrueToLocalStorage}
						sendFalseToLocalStorage={sendFalseToLocalStorage}
					/>
					<CreateTracklist
						addTodoError={addTodoError}
						openPlayer={openPlayer}
						tracks={tracks}
						isLoading={isLoading}
						setIsPlaying={setIsPlaying}
						formatTime={formatTime}
					/>
					<CreateSidebar
						sendFalseToLocalStorage={sendFalseToLocalStorage}
						isLoading={isLoading}
					/>
				</S.Main>
				<CreateAudioPlayer
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					audioRef={audioRef}
					currentPlayer={currentPlayer}
					ProgressBar={ProgressBar}
					formatTime={formatTime}
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
				/>
			</S.Container>
		</S.Wrapper>
	);
};
