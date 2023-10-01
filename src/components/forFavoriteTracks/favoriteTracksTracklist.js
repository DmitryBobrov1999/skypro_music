import React from 'react';
import { CreatePlaylistItemFavorite } from './playlistItemFavorite.js';

import * as S from '../../components/tracklist/Tracklist.styles';
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../redux/slice/todo.js';

export const CreateFavoriteTracklist = ({
	isLoading,
	formatTime,
	stop,
	setSelectedTrackId,
	selectedTrackId,
	favoriteTodos,
	handleLikeClick,
	deleteTrackWithId,
	addTrackWithId,
}) => {
	const dispatch = useDispatch();

	const openPlayer = currentPlayer => {
		dispatch(setCurrentTrack(currentPlayer));
	};

	return (
		<S.MainCenterBlock>
			<S.CenterblockSearch>
				<S.SearchSvg>
					<use xlinkHref='img/icon/sprite.svg#icon-search' />
				</S.SearchSvg>
				<S.SearchText type='search' placeholder='Поиск' name='search' />
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
				<S.ContentPlaylist>
					<CreatePlaylistItemFavorite
						$stop={stop}
						isLoading={isLoading}
						openPlayer={openPlayer}
						formatTime={formatTime}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						favoriteTodos={favoriteTodos}
						handleLikeClick={handleLikeClick}
						deleteTrackWithId={deleteTrackWithId}
						addTrackWithId={addTrackWithId}
					/>
				</S.ContentPlaylist>
			</S.CenterblockContent>
		</S.MainCenterBlock>
	);
};
