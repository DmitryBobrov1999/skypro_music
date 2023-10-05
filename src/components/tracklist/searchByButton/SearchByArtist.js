import React from 'react';
import * as S from './SearchBy.styles';
import { playlistData } from '../../playlistItem/PlaylistData'

export const SearchByArtist = ({
	$visibleFilter,
	openFilter,
	closeAllFilters
}) => {
	const toggleArtist = () => {
		if ($visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('artist');
		}
	};

	const nameList = playlistData.map(data => {
		return <S.ByPar key={data.id}>{data.trackAuthor}</S.ByPar>;
	});

	return (
		<>
			<S.FilterButton onClick={toggleArtist} $visibleFilter={$visibleFilter}>
				Исполнителю
			</S.FilterButton>
			<S.byArtistMegaBlock $visibleFilter={$visibleFilter}>
				<S.byArtistBlock>{nameList}</S.byArtistBlock>
			</S.byArtistMegaBlock>
		</>
	);
};
