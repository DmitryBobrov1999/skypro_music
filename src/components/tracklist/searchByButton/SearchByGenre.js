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
				<S.byArtistBlock>{genreList}</S.byArtistBlock>
			</S.ByGenreMegaBlock>
		</>
	);
};
