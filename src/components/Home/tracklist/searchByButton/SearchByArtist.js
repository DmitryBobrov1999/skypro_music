import React from 'react';
import '../tracklist.css';

export default function SearchByArtist({
	playlistData,
	visibleFilter,
	openFilter,
	closeAllFilters,
}) {
	const toggleArtist = () => {
		if (visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('artist');
		}
	};

	const nameList = playlistData.map(data => {
		return (
			<p className='byPar' key={data.id}>
				{data.trackAuthor}
			</p>
		);
	});

	const styles = {
		color: `${visibleFilter ? '#9A48F1' : ''}`,
		borderColor: `${visibleFilter ? '#9A48F1' : ''}`,
	};

	return (
		<>
			<div
				className='filter__button button-author _btn-text'
				onClick={toggleArtist}
				style={styles}
			>
				Исполнителю
			</div>
			<div
				className='byArtistMegaBlock'
				style={{
					visibility: `${visibleFilter ? 'visible' : 'hidden'}`,
				}}
			>
				<div className='byArtistBlock'>{nameList}</div>
			</div>
		</>
	);
}
