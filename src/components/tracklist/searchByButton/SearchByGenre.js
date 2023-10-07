import React from 'react';
import * as S from './SearchBy.styles';

export const SearchByGenre = ({
	genreData,
	$visibleFilter,
	openFilter,
	closeAllFilters,
}) => {
	const genreList = genreData.map(data => {
		return <S.ByPar key={data.id}>{data.genre}</S.ByPar>;
	});

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
					{/* <S.ByText>Рок</S.ByText>
					<S.ByText>Хип-хоп</S.ByText>
					<S.ByText>Поп-музыка</S.ByText>
					<S.ByText>Техно</S.ByText>
					<S.ByText>Инди</S.ByText>
					<S.ByText>Метал</S.ByText>
					<S.ByText>Классическая музыка</S.ByText> */}
				</S.byArtistBlock>
			</S.ByGenreMegaBlock>
		</>
	);
};
