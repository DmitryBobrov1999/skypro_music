import React, { useContext, useEffect } from 'react';

import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateFavoriteTracklist } from '../../components/forFavoriteTracks/FavoriteTracksTracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from '../main/MainPage.styles';
import { useNavigate } from 'react-router-dom';
import { NavMenuContext } from '../../routes';
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
	error,
	favError,
}) => {
	const navigate = useNavigate();

	const getNavMenuContext = useContext(NavMenuContext);

	useEffect(() => {
		if (error === 401) {
			getNavMenuContext();
			navigate('/login');
		}
	}, [error]);

	useEffect(() => {
		if (favError === 401) {
			getNavMenuContext();
			navigate('/login');
		}
	}, [favError]);

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
						error={error}
					/>
					<CreateSidebar isLoading={isLoading} />
				</S.Main>
			</S.Container>
		</S.Wrapper>
	);
};
