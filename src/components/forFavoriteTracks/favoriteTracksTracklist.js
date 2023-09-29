import React, { useEffect } from 'react';
import { CreatePlaylistItemFavorite } from './playlistItemFavorite.js'; 
import { playlistData } from '../playlistItem/PlaylistData.js'; 
import { yearData } from '../tracklist/searchByButton/yearData.js'; 
import { genreData } from '../tracklist/searchByButton/genreData.js'; 
import { SearchByArtist } from '../tracklist/searchByButton/SearchByArtist.js'; 
import { SearchByYear } from '../tracklist/searchByButton/SearchByYear.js'; 
import { SearchByGenre } from '../tracklist/searchByButton/SearchByGenre.js'; 
import { useState } from 'react';
import * as S from '../../components/tracklist/Tracklist.styles'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, setCurrentTrack } from '../../redux/slice/todo.js';

export const CreateFavoriteTracklist = ({
	isLoading,
	formatTime,
	stop,
	setSelectedTrackId,
	selectedTrackId,
	favoriteTodos,
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
					В этом плейлисте нет треков
					{/* {error && (
						<p style={{ color: 'red' }}>
							Не удалось загрузить плейлист, попробуйте позже: {error}
						</p>
					)} */}
					<CreatePlaylistItemFavorite
						$stop={stop}
						isLoading={isLoading}
						openPlayer={openPlayer}
						formatTime={formatTime}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						favoriteTodos={favoriteTodos}
					/>
					{/* <CreatePlaylistItem
						todos={todos}
						$stop={stop}
						isLoading={isLoading}
						openPlayer={openPlayer}
						formatTime={formatTime}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
					/> */}
				</S.ContentPlaylist>
			</S.CenterblockContent>
		</S.MainCenterBlock>
	);
};
