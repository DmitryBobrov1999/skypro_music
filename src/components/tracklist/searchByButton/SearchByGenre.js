import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../../../api/todosApi';
import {
	setTodos,
	sortByClassicGenre,
	sortByRockGenre,
} from '../../../redux/slice/todoSlice';
import * as S from './SearchBy.styles';

export const SearchByGenre = ({
	genreData,
	$visibleFilter,
	openFilter,
	closeAllFilters,
	todos,
	filteredTodos,
	// toggleFilterByRock,
}) => {
	const dispatch = useDispatch();

	const [genre, setGenre] = useState(null);

	const toggleFilterByClassic = () => {
		dispatch(
			setTodos(todos.filter(track => track.genre === 'Классическая музыка'))
		);
	};

	const toggleFilterByRock = () => {
		dispatch(setTodos(todos.filter(track => track.genre === 'Рок музыка')));
	};

	const toggleGenre = () => {
		if ($visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('genre');
		}
	};

	return (
		<>
			<S.FilterButton onClick={toggleGenre} $visibleFilter={$visibleFilter}>
				Жанру
			</S.FilterButton>
			<S.ByGenreMegaBlock $visibleFilter={$visibleFilter}>
				<S.byArtistBlock>
					<S.ByText
						onClick={() => {
							toggleFilterByClassic();
						}}
					>
						Классическая музыка
					</S.ByText>
					<S.ByText>Электронная музыка</S.ByText>
					<S.ByText onClick={() => {
						toggleFilterByRock()
					}}>Рок</S.ByText>
					<S.ByText>Хип-хоп</S.ByText>
					<S.ByText>Поп-музыка</S.ByText>
					<S.ByText>Техно</S.ByText>
					<S.ByText>Инди</S.ByText>
					<S.ByText>Метал</S.ByText>
				</S.byArtistBlock>
			</S.ByGenreMegaBlock>
		</>
	);
};
