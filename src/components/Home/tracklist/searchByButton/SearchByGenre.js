import React from 'react';
import '../tracklist.css';
import { useState } from 'react';

export default function SearchByGenre({ genreData }) {
	const [visible, setVisible] = useState(false);

	const genreList = genreData.map(data => {
		return (
			<p className='byPar' key={data.id}>
				{data.genre}
			</p>
		);
	});

	const toggleVisibility = () => setVisible(!visible);

	const toggleByGenre = () => {
		const byYearMegaBlock = document.querySelector('.byYearMegaBlock');
		const byArtistMegaBlock = document.querySelector('.byArtistMegaBlock');
		const buttonYear = document.querySelector('.button-year');
		const buttonArtist = document.querySelector('.button-author');
		if (visible) {
			byYearMegaBlock.style.visibility = 'hidden';
			byArtistMegaBlock.style.visibility = 'hidden';

			buttonYear.style.borderColor = '#ffffff';
			buttonYear.style.color = '#ffffff';
			buttonArtist.style.borderColor = '#ffffff';
			buttonArtist.style.color = '#ffffff';
		} 
	};

	toggleByGenre();

	const styles = {
		color: `${visible ? '#9A48F1' : '#ffffff'}`,
		borderColor: `${visible ? '#9A48F1' : '#ffffff'}`,
	};

	return (
		<>
			<div
				className='filter__button button-genre _btn-text'
				onClick={toggleVisibility}
				style={styles}
			>
				Жанру
			</div>
			<div
				className='byGenreMegaBlock'
				style={{
					visibility: `${visible ? 'visible' : 'hidden'}`,
				}}
			>
				<div className='byArtistBlock'>{genreList}</div>
			</div>
		</>
	);
}
