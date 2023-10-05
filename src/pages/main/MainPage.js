import React, { useContext, useEffect } from 'react';

import { CreateSidebar } from '../../components/sidebar/Sidebar';
import { CreateTracklist } from '../../components/tracklist/Tracklist';
import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';
import { useNavigate } from 'react-router-dom';
import { NavMenuContext } from '../../routes';
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
	formatTime,
	openPlayer,
	favoriteTodos,
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
						favoriteTodos={favoriteTodos}
					/>
					<CreateSidebar isLoading={isLoading} />
				</S.Main>
			</S.Container>
		</S.Wrapper>
	);
};
