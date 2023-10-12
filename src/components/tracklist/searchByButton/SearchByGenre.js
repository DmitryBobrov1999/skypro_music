import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	addGenre,
	removeGenre,
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

	const [numberOfGenres, setNumberOfGenres] = useState(null);


	const { selectedGenre } = useSelector(state => state.trackList);

	const toggleGenre = () => {
		if ($visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('genre');
		}
	};

	

	// const handleGenreClick = genre => {
	// 	if (selectedGenre.includes(genre)) {
	// 		dispatch(removeGenre(genre));
	// 		setNumberOfGenres(numberOfGenres + 1);
	// 	} else {
	// 		dispatch(addGenre(genre));
	// 		setNumberOfGenres(numberOfGenres - 1);
	// 	}
	// };

	const memoizedGenreList = useMemo(() => {
		let genreList = [];
		return genreList;
	}, [todos]);

	useEffect(() => {
		setNumberOfGenres(memoizedGenreList.length);
	}, [memoizedGenreList]);

	todos.forEach(track => {
		if (!memoizedGenreList.includes(track.genre)) {
			memoizedGenreList.push(track.genre);
		}
	});

	const handleGenreClick = (genre, event) => {
		if (selectedGenre.includes(genre)) {
			dispatch(removeGenre(genre));
			event.target.style.color = '#ffffff';
			event.target.style.textDecoration = 'none';
			setNumberOfGenres(numberOfGenres + 1);
		} else {
			dispatch(addGenre(genre));
			event.target.style.color = '#b672ff';
			event.target.style.textDecoration = 'underline';
			setNumberOfGenres(numberOfGenres - 1);
		}
	};

	const filteredGenreList = memoizedGenreList.map(track => {
		return (
			<S.ByPar
				onClick={event => {
					handleGenreClick(track, event);
				}}
				key={track}
			>
				{track}
			</S.ByPar>
		);
	});

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
					{filteredGenreList}
					{/* <S.ByText
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
					<S.ByText>Метал</S.ByText> */}
				</S.byArtistBlock>
			</S.ByGenreMegaBlock>
		</>
	);
};
