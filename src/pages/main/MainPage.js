import { CreateAudioPlayer } from '../../components/audioPlayer/AudioPlayer';
import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateTracklist } from '../../components/tracklist/Tracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';
import React, { useEffect, useRef, useState } from 'react';
import { getTracks } from '../../api';
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

	const [isPlaying, setIsPlaying] = useState(null);

	const audioRef = useRef();

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

	const handleStart = () => {
		audioRef.current.play();
		setIsPlaying(false);
	};

	const handleStop = () => {
		audioRef.current.pause();
		setIsPlaying(true);
	};

	const togglePlay = isPlaying ? handleStart : handleStop;

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
				/>
			</S.Container>
		</S.Wrapper>
	);
};
