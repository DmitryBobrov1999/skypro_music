import React, { useEffect } from 'react';
import { CreatePlaylistItem } from '../playlistItem/PlaylistItem.js';
import { playlistData } from '../playlistItem/PlaylistData.js';
import { yearData } from './searchByButton/yearData.js';
import { genreData } from './searchByButton/genreData.js';
import { SearchByArtist } from './searchByButton/SearchByArtist.js';
import { SearchByYear } from './searchByButton/SearchByYear.js';
import { SearchByGenre } from './searchByButton/SearchByGenre.js';
import { useState } from 'react';
import * as S from './Tracklist.styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, setCurrentTrack } from '../../redux/slice/todo.js';

export const CreateTracklist = ({
	isLoading,
	formatTime,
	stop,
	setSelectedTrackId,
	selectedTrackId,
}) => {
	const [$visibleFilter, setVisibleFilter] = useState(null);

	const dispatch = useDispatch();

	const openFilter = filterName => {
		setVisibleFilter(filterName);
	};

	const closeAllFilters = () => {
		setVisibleFilter(null);
	};

	const { todos, error } = useSelector(state => state.todos);

	const openPlayer = currentPlayer => {
		dispatch(setCurrentTrack(currentPlayer));
	};

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return (
		<S.MainCenterBlock>
			<S.CenterblockSearch>
				<S.SearchSvg>
					<use xlinkHref='img/icon/sprite.svg#icon-search' />
				</S.SearchSvg>
				<S.SearchText type='search' placeholder='Поиск' name='search' />
			</S.CenterblockSearch>
			<S.CenterblockH2>Треки</S.CenterblockH2>
			<S.CenterblockFilter>
				<S.FilterTitle>Искать по:</S.FilterTitle>

				<SearchByArtist
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					playlistData={playlistData}
					$visibleFilter={$visibleFilter === 'artist'}
				/>
				<SearchByYear
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					yearData={yearData}
					$visibleFilter={$visibleFilter === 'year'}
				/>
				<SearchByGenre
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					genreData={genreData}
					$visibleFilter={$visibleFilter === 'genre'}
				/>
			</S.CenterblockFilter>
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
					{error && (
						<p style={{ color: 'red' }}>
							Не удалось загрузить плейлист, попробуйте позже: {error}
						</p>
					)}
					<CreatePlaylistItem
						todos={todos}
						$stop={stop}
						isLoading={isLoading}
						openPlayer={openPlayer}
						formatTime={formatTime}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
					/>
				</S.ContentPlaylist>
			</S.CenterblockContent>
		</S.MainCenterBlock>
	);
};
