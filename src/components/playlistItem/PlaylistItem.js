import React from 'react';
import { PlaylistItemSkeleton } from '../SkeletonCard.js';
import * as S from './PlaylistItem.styles';

export const CreatePlaylistItem = ({
	isLoading,
	tracks,
	openPlayer,
	formatTime,
}) => {
	return tracks.map(track => {
		return (
			<S.PlaylistItem
				key={track.id}
				onClick={() => {
					openPlayer(track);

				}}
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
								<S.TrackTitleText className='track__title-text'>
									<S.TrackTitleLink>
										{track.name}
										<S.TrackTitleSpan></S.TrackTitleSpan>
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TrackTime className='track__time'>
								<S.TrackTimeSvg alt='time'>
									<use xlinkHref='img/icon/sprite.svg#icon-like' />
								</S.TrackTimeSvg>
								<S.TrackTimeText>
									{formatTime(track.duration_in_seconds)}
								</S.TrackTimeText>
							</S.TrackTime>
						</>
					) : (
						<>
							<PlaylistItemSkeleton />
						</>
					)}
				</S.PlaylistTrack>
			</S.PlaylistItem>
		);
	});
};
