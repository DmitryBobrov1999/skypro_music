import * as S from '../main/MainPage.styles';
import React, { useContext, useEffect } from 'react';
import { ErrorSidebar } from '../../components/forError/ErrorSidebar';
import { CreateCategoryTracklist } from '../../components/Category/CategoryTracklist';

import { CreateNavMenu } from '../../components/navMenu/NavMenu';
import { useNavigate } from 'react-router-dom';
import { NavMenuContext } from '../../routes';

export const Category = ({
	categoryTodos,
	formatTime,
	openPlayer,
	setSelectedTrackId,
	selectedTrackId,
	stop,
	favoriteTodos,
	deleteTrackWithId,
	addTrackWithId,
	handleCategoryLikeClick,
	error,
	favError,
	catError,
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

	useEffect(() => {
		if (catError === 401) {
			getNavMenuContext();
			navigate('/login');
		}
	}, [catError]);

	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu />

					<CreateCategoryTracklist
						categoryTodos={categoryTodos}
						formatTime={formatTime}
						openPlayer={openPlayer}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						stop={stop}
						favoriteTodos={favoriteTodos}
						deleteTrackWithId={deleteTrackWithId}
						addTrackWithId={addTrackWithId}
						handleCategoryLikeClick={handleCategoryLikeClick}
					/>

					<ErrorSidebar />
				</S.Main>
			</S.Container>
		</S.Wrapper>
	);
};
