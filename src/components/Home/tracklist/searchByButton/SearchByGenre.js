import React from 'react';
import '../tracklist.css';

export default function SearchByGenre({
	genreData,
	visibleFilter,
	openFilter,
	closeAllFilters,
}) {
	const genreList = genreData.map(data => {
		return (
			<p className='byPar' key={data.id}>
				{data.genre}
			</p>
		);
	});

	const toggleGenre = () => {
		if (visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('genre');
		}
	};

	const styles = {
		color: `${visibleFilter ? '#9A48F1' : '#ffffff'}`,
		borderColor: `${visibleFilter ? '#9A48F1' : '#ffffff'}`,
	};

	return (
		<>
			<div
				className='filter__button button-genre _btn-text'
				onClick={toggleGenre}
				style={styles}
			>
				Жанру
			</div>
			<div
				className='byGenreMegaBlock'
				style={{
					visibility: `${visibleFilter ? 'visible' : 'hidden'}`,
				}}
			>
				<div className='byArtistBlock'>{genreList}</div>
			</div>
		</>
	);
}
