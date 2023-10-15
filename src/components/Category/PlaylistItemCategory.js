import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	setCategoryTodo,
	setThreeIsFavoriteList
} from '../../redux/slice/todoSlice';
import * as S from '../playlistItem/PlaylistItem.styles';
import { NavMenuContext } from '../../routes';

export const CreatePlaylistItemCategory = ({
	// categoryTodo,
	formatTime,
	openPlayer,
	setSelectedTrackId,
	selectedTrackId,
	stop,
	favoriteTodos,
	deleteTrackWithId,
	addTrackWithId,
	handleCategoryLikeClick,
	filteredCategoryTodos,
}) => {
	const dispatch = useDispatch();

	const { addError, delError, categoryValue } = useSelector(
		state => state.trackList
	);

	const navigate = useNavigate();

	const getNavMenuContext = useContext(NavMenuContext);

	const checkForError = () => {
		if (addError === 401 || delError === 401) {
			getNavMenuContext();
			navigate('/login');
		}
	};

	useEffect(() => {
		dispatch(setCategoryTodo(filteredCategoryTodos));
	}, [categoryValue]);

	return (
		filteredCategoryTodos &&
		filteredCategoryTodos.map(categoryTrack => (
			<S.PlaylistItem key={categoryTrack.id}>
				<S.PlaylistTrack>
					<S.TrackTitle>
						<S.TrackTitleImage>
							{selectedTrackId === categoryTrack.id ? (
								<S.PlayingDot $stop={stop} />
							) : (
								<S.TrackTitleSvg alt='music'>
									<use xlinkHref='../img/icon/sprite.svg#icon-note' />
								</S.TrackTitleSvg>
							)}
						</S.TrackTitleImage>
						<S.TrackTitleText>
							<S.TrackTitleLink
								onClick={() => {
									openPlayer(categoryTrack);
									setSelectedTrackId(categoryTrack.id);
									dispatch(setThreeIsFavoriteList());
								}}
							>
								{categoryTrack.name}
								<S.TrackTitleSpan></S.TrackTitleSpan>
							</S.TrackTitleLink>
						</S.TrackTitleText>
					</S.TrackTitle>
					<S.TrackAuthor>
						<S.TrackAuthorLink>{categoryTrack.author}</S.TrackAuthorLink>
					</S.TrackAuthor>
					<S.TrackAlbum>
						<S.TrackAlbumLink>{categoryTrack.album}</S.TrackAlbumLink>
					</S.TrackAlbum>
					<S.TrackTime>
						{favoriteTodos.find(t => t.id === categoryTrack.id) ? (
							<S.TrackTimeSvgActive
								onClick={() => {
									handleCategoryLikeClick(categoryTrack.id);
									deleteTrackWithId(categoryTrack.id);
									checkForError();
								}}
								alt='likeActive'
							>
								<use xlinkHref='../img/icon/sprite.svg#icon-like' />
							</S.TrackTimeSvgActive>
						) : (
							<S.TrackTimeSvg
								onClick={() => {
									handleCategoryLikeClick(categoryTrack.id);
									addTrackWithId(categoryTrack.id);
									checkForError();
								}}
								alt='like'
							>
								<use xlinkHref='../img/icon/sprite.svg#icon-like' />
							</S.TrackTimeSvg>
						)}
						<S.TrackTimeText>
							{formatTime(categoryTrack.duration_in_seconds)}
						</S.TrackTimeText>
					</S.TrackTime>
				</S.PlaylistTrack>
			</S.PlaylistItem>
		))
	);
};
