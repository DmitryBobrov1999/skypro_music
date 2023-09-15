import React from 'react';

import * as S from './PlaylistItem.styles';

export const CategoryPlaylistItem = ({ playlistData }) => {
	return playlistData.map(data => {
		return (
			<S.PlaylistItem key={data.id}>
				<S.PlaylistTrack>
					<>
						<S.TrackTitle>
							<S.TrackTitleImage>
								<S.TrackTitleSvg alt='music'>
									<use xlinkHref='/img/icon/sprite.svg#icon-note' />
								</S.TrackTitleSvg>
							</S.TrackTitleImage>
							<div className='track__title-text'>
								<S.TrackTitleLink>
									{data.trackName}
									<S.TrackTitleSpan>{data.trackNameSpan}</S.TrackTitleSpan>
								</S.TrackTitleLink>
							</div>
						</S.TrackTitle>
						<S.TrackAuthor>
							<S.TrackAuthorLink>{data.trackAuthor}</S.TrackAuthorLink>
						</S.TrackAuthor>
						<S.TrackAlbum>
							<S.TrackAlbumLink>{data.trackAlbum}</S.TrackAlbumLink>
						</S.TrackAlbum>
						<div className='track__time'>
							<S.TrackTimeSvg alt='time'>
								<use xlinkHref='/img/icon/sprite.svg#icon-like' />
							</S.TrackTimeSvg>
							<S.TrackTimeText>{data.trackDuration}</S.TrackTimeText>
						</div>
					</>
				</S.PlaylistTrack>
			</S.PlaylistItem>
		);
	});
};