import React from 'react';
import { CreateAudioPlayer } from '../../components/audioPlayer/AudioPlayer';
import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateTracklist } from '../../components/tracklist/Tracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';


export const Home = ({
	isLoading,
	stop,
	setSelectedTrackId,
	selectedTrackId,
	todos,
	error,
	addTrackWithId,
	deleteTrackWithId,
	handleLikeClick,
	favoriteTodos,
	formatTime,
	openPlayer={openPlayer}
}) => {
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
						addTrackWithId={addTrackWithId}
						deleteTrackWithId={deleteTrackWithId}
						handleLikeClick={handleLikeClick}
						openPlayer={openPlayer}
					/>
					<CreateSidebar isLoading={isLoading} />
				</S.Main>

				<CreateAudioPlayer
					formatTime={formatTime}
					todos={todos}
					setSelectedTrackId={setSelectedTrackId}
					selectedTrackId={selectedTrackId}
					favoriteTodos={favoriteTodos}
				/>
			</S.Container>
		</S.Wrapper>
	);
};
