import React from 'react';
import { CreateAudioPlayer } from '../../components/audioPlayer/AudioPlayer';
import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateTracklist } from '../../components/tracklist/Tracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';

import { ProgressBar } from '../../components/ProgressBar/ProgressBar';


export const Home = ({
	isLoading,
	stop,
	setSelectedTrackId,
	selectedTrackId,
	isPlaying,
	audioRef,
	progressBarRef,
	duration,
	timeProgress,
	setTimeProgress,
	handleProgressChange,
	volume,
	setVolume,
	onLoadedMetadata,
	loop,
	setLoop,
	currentPlayer,
	todos,
	error,
	addTrackWithId,
	deleteTrackWithId,
	handleLikeClick,
	favoriteTodos,
}) => {
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
						todos={todos}
						error={error}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						currentPlayer={currentPlayer}
						addTrackWithId={addTrackWithId}
						deleteTrackWithId={deleteTrackWithId}
						handleLikeClick={handleLikeClick}
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
					favoriteTodos={favoriteTodos}
				/>
			</S.Container>
		</S.Wrapper>
	);
};
