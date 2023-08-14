import React from 'react';
import './tracklist.css';
import { useState } from 'react';

export default function SearchByArtist({ playlistData }) {
	const [visible, setVisible] = useState(true);

	const nameList = playlistData.map(data => {
		return (
			<p className='byArtistP' key={data.id}>
				{data.trackAuthor}
			</p>
		);
	});

	const toggleVisibility = () => setVisible(!visible);
	return (
		<>
			<div
				className='filter__button button-author _btn-text'
				onClick={toggleVisibility}
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
