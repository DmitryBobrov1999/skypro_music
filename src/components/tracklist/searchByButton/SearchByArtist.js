import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './SearchBy.styles';
import { playlistData } from '../../playlistItem/PlaylistData';
import { useDispatch, useSelector } from 'react-redux';
import { addArtist, removeArtist } from '../../../redux/slice/todoSlice';

export const SearchByArtist = ({
	$visibleFilter,
	openFilter,
	closeAllFilters,
	todos,
}) => {
	const toggleArtist = () => {
		if ($visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('artist');
		}
	};

	const dispatch = useDispatch();

	const [numberOfArtists, setNumberOfArtists] = useState(null);

	const { selectedArtist } = useSelector(state => state.trackList);

	const memoizedNameList = useMemo(() => {
		let nameList = [];
		return nameList;
	}, [todos]);

	useEffect(() => {
		setNumberOfArtists(memoizedNameList.length);
	}, [memoizedNameList]);

	todos.forEach(track => {
		if (!memoizedNameList.includes(track.author)) {
			memoizedNameList.push(track.author);
		}
	});

	const handleArtistClick = (artist, event) => {
		if (selectedArtist.includes(artist)) {
			dispatch(removeArtist(artist));
			event.target.style.color = '#ffffff';
			event.target.style.textDecoration = 'none';
			setNumberOfArtists(numberOfArtists + 1);
		} else {
			dispatch(addArtist(artist));
			event.target.style.color = '#b672ff';
			event.target.style.textDecoration = 'underline';
			setNumberOfArtists(numberOfArtists - 1);
		}
	};

	const filteredNameList = memoizedNameList.map(track => {
		return (
			<S.ByPar
				onClick={event => {
					handleArtistClick(track, event);
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
				style={{ width: '144px' }}
				onClick={toggleArtist}
				$visibleFilter={$visibleFilter}
			>
				Исполнителю
			</S.FilterButton>
			<S.ArtistIcon
				$visibleFilter={$visibleFilter}
				src='img/icon/artistIcon.png'
			></S.ArtistIcon>
			<S.ArtistNumber $visibleFilter={$visibleFilter}>
				{numberOfArtists}
			</S.ArtistNumber>
			<S.byArtistMegaBlock $visibleFilter={$visibleFilter}>
				<S.byArtistBlock>{filteredNameList}</S.byArtistBlock>
			</S.byArtistMegaBlock>
		</>
	);
};
