import React from 'react';
import { CreatePlaylistItemCategory } from './PlaylistItemCategory';
import { categoryMock } from '../../pages/category/CategoryMock';
import * as S from '../tracklist/Tracklist.styles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryValue } from '../../redux/slice/todoSlice';

export const CreateCategoryTracklist = ({
	categoryTodos,
	formatTime,
	openPlayer,
	setSelectedTrackId,
	selectedTrackId,
	stop,
	favoriteTodos,
	deleteTrackWithId,
	addTrackWithId,
	handleCategoryLikeClick,
}) => {
	const dispatch = useDispatch();

	const params = useParams();

	const {
		categoryValue
	} = useSelector(state => state.trackList);

	const track = categoryMock.find(track => track.id === Number(params.id));

	const categoryTodo = categoryTodos.find(id => id.id === Number(params.id));

	const categoryItems = categoryTodo && categoryTodo?.items;

	const filteredCategoryTodos = categoryItems?.filter(track => {
		return track.name.toLowerCase().includes(categoryValue.toLowerCase());
	});

	return (
		<S.MainCenterBlock>
			<S.CenterblockSearch>
				<S.SearchSvg>
					<use xlinkHref='/img/icon/sprite.svg#icon-search' />
				</S.SearchSvg>
				<S.SearchText
					type='search'
					placeholder='Поиск'
					name='search'
					onChange={event => {
						dispatch(setCategoryValue(event.target.value));
					}}
				/>
			</S.CenterblockSearch>
			<S.CenterblockH2>{track.category}</S.CenterblockH2>

			<S.CenterblockContent>
				<S.ContentTitle>
					<S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
					<S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
					<S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
					<S.PlaylistTitleCol4>
						<S.PlaylistTitleSvg alt='time'>
							<use xlinkHref='/img/icon/sprite.svg#icon-watch' />
						</S.PlaylistTitleSvg>
					</S.PlaylistTitleCol4>
				</S.ContentTitle>
				<S.ContentCategoryPlaylist>
					<CreatePlaylistItemCategory
						formatTime={formatTime}
						filteredCategoryTodos={filteredCategoryTodos}
						// categoryTodo={categoryTodo}
						openPlayer={openPlayer}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						stop={stop}
						favoriteTodos={favoriteTodos}
						deleteTrackWithId={deleteTrackWithId}
						addTrackWithId={addTrackWithId}
						handleCategoryLikeClick={handleCategoryLikeClick}
					/>
				</S.ContentCategoryPlaylist>
			</S.CenterblockContent>
		</S.MainCenterBlock>
	);
};
