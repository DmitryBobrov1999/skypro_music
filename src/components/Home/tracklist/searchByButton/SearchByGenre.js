import React from 'react';
import * as S from './SearchBy.styles';

export default function SearchByGenre({
	genreData,
	visibleFilter,
	openFilter,
	closeAllFilters,
}) {
	const genreList = genreData.map(data => {
		return <S.ByPar key={data.id}>{data.genre}</S.ByPar>;
	});

	const toggleGenre = () => {
		if (visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('genre');
		}
	};

	const styles = {
		color: `${visibleFilter ? '#9A48F1' : ''}`,
		borderColor: `${visibleFilter ? '#9A48F1' : ''}`,
	};

	return (
		<>
			<S.FilterButton onClick={toggleGenre} style={styles}>
				Жанру
			</S.FilterButton>
			<S.ByGenreMegaBlock
				style={{
					visibility: `${visibleFilter ? 'visible' : 'hidden'}`,
				}}
			>
				<S.byArtistBlock>{genreList}</S.byArtistBlock>
			</S.ByGenreMegaBlock>
		</>
	);
}
