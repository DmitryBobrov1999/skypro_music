import React from 'react';
import * as S from './SearchBy.styles';

export default function SearchByYear({
	yearData,
	$visibleFilter,

	openFilter,
	closeAllFilters,
}) {
	const yearList = yearData.map(data => {
		return <S.ByPar key={data.id}>{data.year}</S.ByPar>;
	});

	const toggleYear = () => {
		if ($visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('year');
		}
	};

	return (
		<>
			<S.FilterButton onClick={toggleYear} $visibleFilter={$visibleFilter}>
				Году выпуска
			</S.FilterButton>
			<S.ByYearMegaBlock $visibleFilter={$visibleFilter}>
				<S.ByYearBlock>{yearList}</S.ByYearBlock>
			</S.ByYearMegaBlock>
		</>
	);
}
