import React from 'react';
import { PlaylistItemSkeleton } from '../SkeletonCard.js';
import * as S from './PlaylistItem.styles';

export default function CreatePlaylistItem({ isLoading, tracks, openPlayer, addTodoError }) {
	return tracks.map(track => {
		return (
			<>
				<p style={{ color: 'red' }}>{addTodoError}</p>
				<S.PlaylistItem
					onClick={() => {
						openPlayer(track);
					}}
					key={track.id}
				>
					<S.PlaylistTrack>
						{isLoading ? (
							<>
								<S.TrackTitle>
									<S.TrackTitleImage>
										<S.TrackTitleSvg alt='music'>
											<use xlinkHref='img/icon/sprite.svg#icon-note' />
										</S.TrackTitleSvg>
									</S.TrackTitleImage>
									<div className='track__title-text'>
										<S.TrackTitleLink>
											{track.name}
											<S.TrackTitleSpan>{}</S.TrackTitleSpan>
										</S.TrackTitleLink>
									</div>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
								</S.TrackAlbum>
								<div className='track__time'>
									<S.TrackTimeSvg alt='time'>
										<use xlinkHref='img/icon/sprite.svg#icon-like' />
									</S.TrackTimeSvg>
									<S.TrackTimeText>
										{(track.duration_in_seconds / 60).toFixed(2)}
									</S.TrackTimeText>
								</div>
							</>
						) : (
							<>
								<PlaylistItemSkeleton />
							</>
						)}
					</S.PlaylistTrack>
				</S.PlaylistItem>
			</>
		);
	});
}
