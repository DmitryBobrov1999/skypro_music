import React from 'react';
import * as S from './PlaylistItem.styles';

export const CategoryPlaylistItem = ({ categoryTodos }) => {
	const categoryTodoItems = categoryTodos.map(categoryTodo => {
		return categoryTodo.items;
	});

	return (
		categoryTodoItems &&
		categoryTodoItems.map(realTodo =>
			realTodo.map(data => (
				<S.PlaylistItem key={data.id}>
					<S.PlaylistTrack>
						<S.TrackTitle>
							<S.TrackTitleImage>
								<S.TrackTitleSvg alt='music'>
									<use xlinkHref='/img/icon/sprite.svg#icon-note' />
								</S.TrackTitleSvg>
							</S.TrackTitleImage>
							<div className='track__title-text'>
								<S.TrackTitleLink>
									{data.name}
									<S.TrackTitleSpan></S.TrackTitleSpan>
								</S.TrackTitleLink>
							</div>
						</S.TrackTitle>
						<S.TrackAuthor>
							<S.TrackAuthorLink>{data.author}</S.TrackAuthorLink>
						</S.TrackAuthor>
						<S.TrackAlbum>
							<S.TrackAlbumLink>{data.album}</S.TrackAlbumLink>
						</S.TrackAlbum>
						<div className='track__time'>
							<S.TrackTimeSvg alt='time'>
								<use xlinkHref='/img/icon/sprite.svg#icon-like' />
							</S.TrackTimeSvg>
							<S.TrackTimeText>{data.duration_in_seconds}</S.TrackTimeText>
						</div>
					</S.PlaylistTrack>
				</S.PlaylistItem>
			))
		)
	);
};
