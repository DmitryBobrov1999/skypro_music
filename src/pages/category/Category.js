import * as S from '../main/MainPage.styles';
import React from 'react';
import { ErrorSidebar } from '../../components/forError/ErrorSidebar';
import { CreateCategoryTracklist } from '../../components/Category/CategoryTracklist';

import { CreateNavMenu } from '../../components/navMenu/NavMenu';

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

}) => {
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
