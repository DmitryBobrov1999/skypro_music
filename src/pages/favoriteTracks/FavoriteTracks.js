import React from 'react';
import { CreateAudioPlayer } from '../../components/audioPlayer/AudioPlayer';
import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateFavoriteTracklist } from '../../components/forFavoriteTracks/favoriteTracksTracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from '../main/MainPage.styles';

export const FavoriteTracks = ({
	isLoading,
	stop,
	setSelectedTrackId,
	selectedTrackId,
	favoriteTodos,
	handleFavoriteLikeClick,
	deleteTrackWithId,
	addTrackWithId,
	formatTime,
	openPlayer,
}) => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu />

					<CreateFavoriteTracklist
						formatTime={formatTime}
						stop={stop}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						favoriteTodos={favoriteTodos}
						handleFavoriteLikeClick={handleFavoriteLikeClick}
						deleteTrackWithId={deleteTrackWithId}
						addTrackWithId={addTrackWithId}
						openPlayer={openPlayer}
					/>
					<CreateSidebar isLoading={isLoading} />
				</S.Main>
				<CreateAudioPlayer
					formatTime={formatTime}
					favoriteTodos={favoriteTodos}
					setSelectedTrackId={setSelectedTrackId}
					selectedTrackId={selectedTrackId}
				/>
				,
			</S.Container>
		</S.Wrapper>
	);
};
