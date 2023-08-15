import React from 'react';
import '../tracklist.css';
import { useState } from 'react';

export default function SearchByYear({ yearData }) {
	const [visible, setVisible] = useState(false);

	const yearList = yearData.map(data => {
		return (
			<p className='byPar' key={data.id}>
				{data.year}
			</p>
		);
	});

	const toggleVisibility = () => setVisible(!visible);

	const styles = {
		color: `${visible ? '#9A48F1' : '#ffffff'}`,
		borderColor: `${visible ? '#9A48F1' : '#ffffff'}`,
	};

	const toggleByYear = () => {
		const byArtistMegaBlock = document.querySelector('.byArtistMegaBlock');
		const byGenreMegaBlock = document.querySelector('.byGenreMegaBlock');
		const buttonGenre = document.querySelector('.button-genre');
		const buttonArtist = document.querySelector('.button-author');
		if (visible) {
			byArtistMegaBlock.style.visibility = 'hidden';
			byGenreMegaBlock.style.visibility = 'hidden';

			buttonGenre.style.borderColor = '#ffffff';
			buttonGenre.style.color = '#ffffff';
			buttonArtist.style.borderColor = '#ffffff';
			buttonArtist.style.color = '#ffffff';
		} 
	};

	toggleByYear();

	return (
		<>
			<div
				className='filter__button button-year _btn-text'
				onClick={toggleVisibility}
				style={styles}
			>
				Году выпуска
			</div>
			<div
				className='byYearMegaBlock'
				style={{ visibility: `${visible ? 'visible' : 'hidden'}` }}
			>
				<div className='byYearBlock'>{yearList}</div>
			</div>
		</>
	);
}
