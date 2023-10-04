import React from 'react';
import { useDispatch } from 'react-redux';
import { setTrueIsFavoriteList } from '../../redux/slice/todo';

import * as S from '../playlistItem/PlaylistItem.styles';

export const CreatePlaylistItemFavorite = ({
	openPlayer,
	formatTime,
	$stop,
	setSelectedTrackId,
	selectedTrackId,
	favoriteTodos,
	handleFavoriteLikeClick,
	deleteTrackWithId,
	addTrackWithId,
}) => {

	const dispatch = useDispatch();

	return (
		favoriteTodos &&
		favoriteTodos.map(favoriteTrack => (
			<S.PlaylistItem key={favoriteTrack.id}>
				<S.PlaylistTrack>
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
										dispatch(setTrueIsFavoriteList());
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
										handleFavoriteLikeClick(favoriteTrack.id);
										deleteTrackWithId(favoriteTrack.id);
									}}
									alt='likeActive'
								>
									<use xlinkHref='img/icon/sprite.svg#icon-like' />
								</S.TrackTimeSvgActive>
							) : (
								<S.TrackTimeSvg
									onClick={() => {
										handleFavoriteLikeClick(favoriteTrack.id);
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
				</S.PlaylistTrack>
			</S.PlaylistItem>
		))
	);
};
