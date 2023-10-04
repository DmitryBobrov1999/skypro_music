import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFalseIsFavoriteList } from '../../redux/slice/todo.js';

import { PlaylistItemSkeleton } from '../SkeletonCard.js';
import * as S from './PlaylistItem.styles';

export const CreatePlaylistItem = ({
	isLoading,
	openPlayer,
	formatTime,
	todos,
	$stop,
	setSelectedTrackId,
	selectedTrackId,
	addTrackWithId,
	deleteTrackWithId,
	handleLikeClick,
	favoriteTodos,
}) => {
	const dispatch = useDispatch();

	return (
		todos &&
		todos.map(track => (
			<S.PlaylistItem key={track.id}>
				<S.PlaylistTrack>
					{isLoading ? (
						<>
							<S.TrackTitle>
								<S.TrackTitleImage>
									{selectedTrackId === track.id ? (
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
											openPlayer(track);
											setSelectedTrackId(track.id);
											dispatch(setFalseIsFavoriteList());
										}}
									>
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
								{favoriteTodos.find(t => t.id === track.id) ? (
									<S.TrackTimeSvgActive
										onClick={() => {
											handleLikeClick(track.id);
											deleteTrackWithId(track.id);
										}}
										alt='likeActive'
									>
										<use xlinkHref='img/icon/sprite.svg#icon-like' />
									</S.TrackTimeSvgActive>
								) : (
									<S.TrackTimeSvg
										onClick={() => {
											handleLikeClick(track.id);
											addTrackWithId(track.id);
										}}
										alt='like'
									>
										<use xlinkHref='img/icon/sprite.svg#icon-like' />
									</S.TrackTimeSvg>
								)}

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
		))
	);
};
