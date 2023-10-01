import React from 'react';
import { PlaylistItemSkeleton } from '../SkeletonCard.js';
import * as S from '../playlistItem/PlaylistItem.styles'

export const CreatePlaylistItemFavorite = ({
	isLoading,
	openPlayer,
	formatTime,
	$stop,
	setSelectedTrackId,
	selectedTrackId,
	favoriteTodos,
	handleLikeClick,
	deleteTrackWithId,
	addTrackWithId,
}) => {
	

	return (
		favoriteTodos &&
		favoriteTodos.map(favoriteTrack => (
			<S.PlaylistItem key={favoriteTrack.id}>
				<S.PlaylistTrack>
					{isLoading ? (
						<>
							<S.TrackTitle>
								<S.TrackTitleImage>
									{selectedTrackId === favoriteTrack.id ? (
										<S.PlayingDot $stop={$stop} />
									) : (
										<S.TrackTitleSvg alt='music'>
											<use xlinkHref='img/icon/sprite.svg#icon-note' />
										</S.TrackTitleSvg>
									)}
								</S.TrackTitleImage>
								<S.TrackTitleText className='track__title-text'>
									<S.TrackTitleLink
										onClick={() => {
											openPlayer(favoriteTrack);
											setSelectedTrackId(favoriteTrack.id);
										}}
									>
										{favoriteTrack.name}
										<S.TrackTitleSpan></S.TrackTitleSpan>
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink>{favoriteTrack.author}</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink>{favoriteTrack.album}</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TrackTime className='track__time'>
								{favoriteTodos.find(t => t.id) ? (
									<S.TrackTimeSvgActive
										onClick={() => {
											handleLikeClick(favoriteTrack.id);
											deleteTrackWithId(favoriteTrack.id);
										}}
										alt='likeActive'
									>
										<use xlinkHref='img/icon/sprite.svg#icon-like' />
									</S.TrackTimeSvgActive>
								) : (
									<S.TrackTimeSvg
										onClick={() => {
											handleLikeClick(favoriteTrack.id);
											addTrackWithId(favoriteTrack.id);
										}}
										alt='like'
									>
										<use xlinkHref='img/icon/sprite.svg#icon-like' />
									</S.TrackTimeSvg>
								)}
								<S.TrackTimeText>
									{formatTime(favoriteTrack.duration_in_seconds)}
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
		))
	);
};
