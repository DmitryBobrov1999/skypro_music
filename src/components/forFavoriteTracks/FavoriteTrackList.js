import React from 'react';
import { CreatePlaylistItemFavorite } from './PlaylistFavorite.js';

import * as S from '../tracklist/Tracklist.styles';

export const CreateFavoriteTracklist = ({
	formatTime,
	stop,
	setSelectedTrackId,
	selectedTrackId,
	favoriteTodos,
	handleFavoriteLikeClick,
	deleteTrackWithId,
	addTrackWithId,
	openPlayer,
	filteredFavoriteTodos,
	setFavTodosValue,
}) => {
	return (
		<S.MainCenterBlock>
			<S.CenterblockSearch>
				<S.SearchSvg>
					<use xlinkHref='img/icon/sprite.svg#icon-search' />
				</S.SearchSvg>
				<S.SearchText
					type='search'
					placeholder='Поиск'
					name='search'
					onChange={event => setFavTodosValue(event.target.value)}
				/>
			</S.CenterblockSearch>
			<S.CenterblockH2>Мои треки</S.CenterblockH2>

			<S.CenterblockContent>
				<S.ContentTitle>
					<S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
					<S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
					<S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
					<S.PlaylistTitleCol4>
						<S.PlaylistTitleSvg alt='time'>
							<use xlinkHref='img/icon/sprite.svg#icon-watch' />
						</S.PlaylistTitleSvg>
					</S.PlaylistTitleCol4>
				</S.ContentTitle>
				<S.ContentCategoryPlaylist>
					<CreatePlaylistItemFavorite
						$stop={stop}
						openPlayer={openPlayer}
						formatTime={formatTime}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						filteredFavoriteTodos={filteredFavoriteTodos}
						favoriteTodos={favoriteTodos}
						handleFavoriteLikeClick={handleFavoriteLikeClick}
						deleteTrackWithId={deleteTrackWithId}
						addTrackWithId={addTrackWithId}
					/>
				</S.ContentCategoryPlaylist>
			</S.CenterblockContent>
		</S.MainCenterBlock>
	);
};
