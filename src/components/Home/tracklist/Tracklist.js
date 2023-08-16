import './tracklist.css';
import React from 'react';
import CreatePlaylistItem from '../playlistItem/PlaylistItem.js';
import { playlistData } from '../playlistItem/playlistData.js';
import { yearData } from './searchByButton/yearData.js';
import { genreData } from './searchByButton/genreData.js';
import SearchByArtist from './searchByButton/SearchByArtist.js';
import SearchByYear from './searchByButton/SearchByYear.js';
import SearchByGenre from './searchByButton/SearchByGenre.js';
import { useState } from 'react';

export default function CreateTracklist({ isLoading }) {
	
	const [visibleFilter, setVisibleFilter] = useState(null);

	const openFilter = filterName => {
		setVisibleFilter(filterName);
	};

	const closeAllFilters = () => {
		setVisibleFilter(null);
	};

	return (
		<div className='main__centerblock centerblock'>
			<div className='centerblock__search search'>
				<svg className='search__svg'>
					<use xlinkHref='img/icon/sprite.svg#icon-search' />
				</svg>
				<input
					className='search__text'
					type='search'
					placeholder='Поиск'
					name='search'
				/>
			</div>
			<h2 className='centerblock__h2'>Треки</h2>
			<div className='centerblock__filter filter'>
				<div className='filter__title'>Искать по:</div>

				<SearchByArtist
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					playlistData={playlistData}
					visibleFilter={visibleFilter === 'artist'}
				/>
				<SearchByYear
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					yearData={yearData}
					visibleFilter={visibleFilter === 'year'}
				/>
				<SearchByGenre
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					genreData={genreData}
					visibleFilter={visibleFilter === 'genre'}
				/>
			</div>
			<div className='centerblock__content'>
				<div className='content__title playlist-title'>
					<div className='playlist-title__col col01'>Трек</div>
					<div className='playlist-title__col col02'>ИСПОЛНИТЕЛЬ</div>
					<div className='playlist-title__col col03'>АЛЬБОМ</div>
					<div className='playlist-title__col col04'>
						<svg className='playlist-title__svg' alt='time'>
							<use xlinkHref='img/icon/sprite.svg#icon-watch' />
						</svg>
					</div>
				</div>
				<div className='content__playlist playlist'>
					<CreatePlaylistItem
						playlistData={playlistData}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</div>
	);
}
