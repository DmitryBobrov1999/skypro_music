import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	addGenre,
	removeGenre,
	setGenre,
} from '../../../redux/slice/todoSlice';
import * as S from './SearchBy.styles';

export const SearchByGenre = ({
	$visibleFilter,
	openFilter,
	closeAllFilters,
	todos,
	filteredTodos,
}) => {
	const dispatch = useDispatch();

	const [numberOfGenres, setNumberOfGenres] = useState(8);

	const [colorForClassic, setColorForClassic] = useState(false)

	const [colorForElectronic, setColorForElectronic] = useState(false)

	const [colorForRock, setColorForRock] = useState(false);

	const toggleGenre = () => {
		if ($visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('genre');
		}
	};

	const { selectedGenre } = useSelector(state => state.trackList);

	const handleGenreClick = genre => {
		if (selectedGenre.includes(genre)) {
			dispatch(removeGenre(genre));
			setNumberOfGenres(numberOfGenres + 1);
		} else {
			dispatch(addGenre(genre));
			setNumberOfGenres(numberOfGenres - 1);
		}
	};

	return (
		<>
			<S.FilterButton
				style={{ marginRight: '-10px', width: '91px' }}
				onClick={toggleGenre}
				$visibleFilter={$visibleFilter}
			>
				Жанру
			</S.FilterButton>
			<S.GenreIcon
				$visibleFilter={$visibleFilter}
				src='img/icon/genreIcon.png'
			></S.GenreIcon>
			<S.GenreNumber $visibleFilter={$visibleFilter}>
				{numberOfGenres}
			</S.GenreNumber>
			<S.ByGenreMegaBlock $visibleFilter={$visibleFilter}>
				<S.byArtistBlock>
					<S.ByText
						style={{
							color: `${colorForClassic ? '#b672ff' : '#ffffff'}`,
							textDecoration: `${colorForClassic ? 'underline' : 'none'}`,
						}}
						onClick={() => {
							handleGenreClick('Классическая музыка');
							setColorForClassic(!colorForClassic);
						}}
					>
						Классическая музыка
					</S.ByText>
					<S.ByText
						style={{
							color: `${colorForElectronic ? '#b672ff' : '#ffffff'}`,
							textDecoration: `${colorForElectronic ? 'underline' : 'none'}`,
						}}
						onClick={() => {
							handleGenreClick('Электронная музыка');
							setColorForElectronic(!colorForElectronic);
						}}
					>
						Электронная музыка
					</S.ByText>
					<S.ByText
						style={{
							color: `${colorForRock ? '#b672ff' : '#ffffff'}`,
							textDecoration: `${colorForRock ? 'underline' : 'none'}`,
						}}
						onClick={() => {
							handleGenreClick('Рок музыка');
							setColorForRock(!colorForRock);
						}}
					>
						Рок
					</S.ByText>
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
