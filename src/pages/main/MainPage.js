import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CreateAudioPlayer } from '../../components/audioPlayer/AudioPlayer';
import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateTracklist } from '../../components/tracklist/Tracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';

import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { useSelector } from 'react-redux';

export const Home = ({ isLoading }) => {
	const [duration, setDuration] = useState(0);

	const [timeProgress, setTimeProgress] = useState(0);

	const [loop, setLoop] = useState(false);

	const [volume, setVolume] = useState(2);

	const [stop, setStop] = useState(false);

	const audioRef = useRef();

	const progressBarRef = useRef();

	const playAnimationRef = useRef();

	const { isPlaying, currentPlayer, todos } = useSelector(state => state.todos);

	const [selectedTrackId, setSelectedTrackId] = useState(null);

	useEffect(() => {
		if (audioRef && audioRef.current) {
			audioRef.current.loop = loop;
		}
	}, [loop, audioRef]);

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
					<CreateNavMenu />
					<CreateTracklist
						isLoading={isLoading}
						formatTime={formatTime}
						stop={stop}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
					/>
					<CreateSidebar isLoading={isLoading} />
				</S.Main>
				<CreateAudioPlayer
					isPlaying={isPlaying}
					audioRef={audioRef}
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
					currentPlayer={currentPlayer}
					todos={todos}
					setSelectedTrackId={setSelectedTrackId}
					selectedTrackId={selectedTrackId}
				/>
			</S.Container>
		</S.Wrapper>
	);
};
