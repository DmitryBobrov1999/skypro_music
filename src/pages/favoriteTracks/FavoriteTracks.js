import React from 'react';
import { CreateAudioPlayer } from '../../components/audioPlayer/AudioPlayer';
import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateFavoriteTracklist } from '../../components/forFavoriteTracks/favoriteTracksTracklist'
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from '../main/MainPage.styles'

import { ProgressBar } from '../../components/ProgressBar/ProgressBar';


export const FavoriteTracks = ({
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
	favoriteTodos,
	handleLikeClick,
	deleteTrackWithId,
	addTrackWithId,
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

					<CreateFavoriteTracklist
						isLoading={isLoading}
						formatTime={formatTime}
						stop={stop}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						favoriteTodos={favoriteTodos}
						handleLikeClick={handleLikeClick}
						deleteTrackWithId={deleteTrackWithId}
						addTrackWithId={addTrackWithId}
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
					favoriteTodos={favoriteTodos}
					setSelectedTrackId={setSelectedTrackId}
					selectedTrackId={selectedTrackId}
				/>
			</S.Container>
		</S.Wrapper>
	);
};
