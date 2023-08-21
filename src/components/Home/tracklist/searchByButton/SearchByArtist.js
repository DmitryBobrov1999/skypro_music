import React from 'react';
import * as S from './SearchBy.styles';

export default function SearchByArtist({
	playlistData,
	visibleFilter,
	openFilter,
	closeAllFilters,
}) {
	const toggleArtist = () => {
		if (visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('artist');
		}
	};

	const nameList = playlistData.map(data => {
		return <S.ByPar key={data.id}>{data.trackAuthor}</S.ByPar>;
	});

	const styles = {
		color: `${visibleFilter ? '#9A48F1' : ''}`,
		borderColor: `${visibleFilter ? '#9A48F1' : ''}`,
	};

	return (
		<>
			<S.FilterButton onClick={toggleArtist} style={styles}>
				Исполнителю
			</S.FilterButton>
			<S.byArtistMegaBlock
				style={{
					visibility: `${visibleFilter ? 'visible' : 'hidden'}`,
				}}
			>
				<S.byArtistBlock>{nameList}</S.byArtistBlock>
			</S.byArtistMegaBlock>
		</>
	);
}
