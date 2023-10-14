import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOneIsFavoriteList } from '../../redux/slice/todoSlice.js';
import { PlaylistItemSkeleton } from '../SkeletonCard.js';
import * as S from './PlaylistItem.styles';
import { NavMenuContext } from '../../routes.jsx';

export const CreatePlaylistItem = ({
	isLoading,
	openPlayer,
	formatTime,
	$stop,
	setSelectedTrackId,
	selectedTrackId,
	addTrackWithId,
	deleteTrackWithId,
	handleLikeClick,
	favoriteTodos,
	filteredAll,
}) => {
	const dispatch = useDispatch();

	const { addError, delError } = useSelector(state => state.trackList);

	const navigate = useNavigate();

	const getNavMenuContext = useContext(NavMenuContext);

	const checkForError = () => {
		if (addError === 401 || delError === 401) {
			getNavMenuContext();
			navigate('/login');
		}
	};

	return (
		filteredAll &&
		filteredAll.map(track => (
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
								<S.TrackTitleText>
									<S.TrackTitleLink
										onClick={() => {
											openPlayer(track);
											setSelectedTrackId(track.id);
											dispatch(setOneIsFavoriteList());
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
							<S.TrackTime>
								{favoriteTodos.find(t => t.id === track.id) ? (
									<S.TrackTimeSvgActive
										onClick={() => {
											handleLikeClick(track.id);
											deleteTrackWithId(track.id);
											checkForError();
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
											checkForError();
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
