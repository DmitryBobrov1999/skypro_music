import React from 'react';
import '../tracklist.css';
import { useState } from 'react';

export default function SearchByArtist({ playlistData }) {
	const [visible, setVisible] = useState(false);

	const nameList = playlistData.map(data => {
		return (
			<p className='byPar' key={data.id}>
				{data.trackAuthor}
			</p>
		);
	});

	const toggleVisibility = () => setVisible(!visible);

	const toggleByArtist = () => {
		const byYearMegaBlock = document.querySelector('.byYearMegaBlock');
		const byGenreMegaBlock = document.querySelector('.byGenreMegaBlock');
		const buttonYear = document.querySelector('.button-year');
		const buttonGenre = document.querySelector('.button-genre');
		if (visible) {
			byYearMegaBlock.style.visibility = 'hidden';
			byGenreMegaBlock.style.visibility = 'hidden';
			
			buttonGenre.style.borderColor = '#ffffff';
			buttonGenre.style.color = '#ffffff';
			buttonYear.style.borderColor = '#ffffff';
			buttonYear.style.color = '#ffffff';
		} 
	};

	toggleByArtist();

	const styles = {
		color: `${visible ? '#9A48F1' : ''}`,
		borderColor: `${visible ? '#9A48F1' : ''}`,
	};

	return (
		<>
			<div
				className='filter__button button-author _btn-text'
				onClick={toggleVisibility}
				style={styles}
			>
				Исполнителю
			</div>
			<div
				className='byArtistMegaBlock'
				style={{ visibility: `${visible ? 'visible' : 'hidden'}` }}
			>
				<div className='byArtistBlock'>{nameList}</div>
			</div>
		</>
	);
}
