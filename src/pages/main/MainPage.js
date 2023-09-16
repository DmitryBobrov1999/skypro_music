import React, { useEffect, useRef, useState } from 'react';
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

	const [currentTime, setCurrentTime] = useState(0);

	const [volume, setVolume] = useState(10)

	const audioRef = useRef();

	const progressBarRef = useRef();

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

	useEffect(() => {
		if(audioRef) {
			audioRef.current.volume = volume / 100
		}
	}, [volume])

	const togglePlay = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
		progressBarRef.current.style.setProperty(
			'--seek-before-width',
			`${(progressBarRef.current.value / duration) * 100}%`
		);
		setCurrentTime(audioRef.current.currentTime);
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
					audioRef={audioRef}
					togglePlay={togglePlay}
					currentPlayer={currentPlayer}
					ProgressBar={ProgressBar}
					formatTime={formatTime}
					progressBarRef={progressBarRef}
					duration={duration}
					setDuration={setDuration}
					currentTime={currentTime}
					setCurrentTime={setCurrentTime}
					handleProgressChange={handleProgressChange}
					volume={volume}
					setVolume={setVolume}
				/>
			</S.Container>
		</S.Wrapper>
	);
};
