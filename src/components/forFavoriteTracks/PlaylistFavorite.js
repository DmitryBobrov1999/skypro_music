import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTwoIsFavoriteList } from '../../redux/slice/todoSlice'; 

import * as S from '../playlistItem/PlaylistItem.styles';
import { NavMenuContext } from '../../routes';

export const CreatePlaylistItemFavorite = ({
	openPlayer,
	formatTime,
	$stop,
	setSelectedTrackId,
	selectedTrackId,
	filteredFavoriteTodos,
	handleFavoriteLikeClick,
	deleteTrackWithId,
	addTrackWithId,
	favoriteTodos,
}) => {
	const dispatch = useDispatch();

	const getNavMenuContext = useContext(NavMenuContext);

	const navigate = useNavigate();

	const { delError } = useSelector(state => state.trackList);

	const checkForError = () => {
		if (delError === 401) {
			getNavMenuContext();
			navigate('/login');
		}
	};
	return (
		filteredFavoriteTodos &&
		filteredFavoriteTodos.map(favoriteTrack => (
			<S.PlaylistItem key={favoriteTrack.id}>
				<S.PlaylistTrack>
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
						<S.TrackTitleText>
							<S.TrackTitleLink
								onClick={() => {
									openPlayer(favoriteTrack);
									setSelectedTrackId(favoriteTrack.id);
									dispatch(setTwoIsFavoriteList());
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
					<S.TrackTime>
						{favoriteTodos.find(t => t.id) ? (
							<S.TrackTimeSvgActive
								onClick={() => {
									handleFavoriteLikeClick(favoriteTrack.id);
									deleteTrackWithId(favoriteTrack.id);
									checkForError();
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
				</S.PlaylistTrack>
			</S.PlaylistItem>
		))
	);
};
