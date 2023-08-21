import React from 'react';
import * as S from './SearchBy.styles';

export default function SearchByYear({
	yearData,
	visibleFilter,
	openFilter,
	closeAllFilters,
}) {
	const yearList = yearData.map(data => {
		return <S.ByPar key={data.id}>{data.year}</S.ByPar>;
	});

	const toggleYear = () => {
		if (visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('year');
		}
	};

	const styles = {
		color: `${visibleFilter ? '#9A48F1' : ''}`,
		borderColor: `${visibleFilter ? '#9A48F1' : ''}`,
	};

	return (
		<>
			<S.FilterButton onClick={toggleYear} style={styles}>
				Году выпуска
			</S.FilterButton>
			<S.ByYearMegaBlock
				style={{
					visibility: `${visibleFilter ? 'visible' : 'hidden'}`,
				}}
			>
				<S.ByYearBlock>{yearList}</S.ByYearBlock>
			</S.ByYearMegaBlock>
		</>
	);
}
