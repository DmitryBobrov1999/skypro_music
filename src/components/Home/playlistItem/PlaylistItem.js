import React from 'react';
import './playlistItem.css';


export default function CreatePlaylistItem(props) {

	const playlistData = props.playlistData;
	
	return playlistData.map(data => {
		return (
			<div key={data.id} className='playlist__item'>
				<div className='playlist__track track'>
					<div className='track__title'>
						<div className='track__title-image'>
							<svg className='track__title-svg' alt='music'>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div className='track__title-text'>
							<a className='track__title-link' href='http://'>
								{data.trackName}
								<span className='track__title-span'>{data.trackNameSpan}</span>
							</a>
						</div>
					</div>
					<div className='track__author'>
						<a className='track__author-link' href='http://'>
							{data.trackAuthor}
						</a>
					</div>
					<div className='track__album'>
						<a className='track__album-link' href='http://'>
							{data.trackAlbum}
						</a>
					</div>
					<div className='track__time'>
						<svg className='track__time-svg' alt='time'>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className='track__time-text'>{data.trackDuration}</span>
					</div>
				</div>
			</div>
		);
	});
}
