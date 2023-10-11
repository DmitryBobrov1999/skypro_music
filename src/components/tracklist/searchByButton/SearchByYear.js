import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../../api/todosApi';
import {
	sortStartFromTheNew,
	sortStartFromTheOld,
	sortStartFromDefault,
} from '../../../redux/slice/todoSlice';
import * as S from './SearchBy.styles';

export const SearchByYear = ({
	$visibleFilter,
	openFilter,
	closeAllFilters,
	todos,
}) => {
	const toggleYear = () => {
		if ($visibleFilter) {
			closeAllFilters();
		} else {
			closeAllFilters();
			openFilter('year');
		}
	};

	const { sortYearOld, sortYearNew, sortYearDefault } = useSelector(
		state => state.trackList
	);

	const dispatch = useDispatch();

	const handleSortStartFromTheNew = () => {
		dispatch(sortStartFromTheNew());
	};
	const handleSortStartFromTheOld = () => {
		dispatch(sortStartFromTheOld());
	};
	const handleSortStartFromDefault = () => {
		dispatch(sortStartFromDefault());
		dispatch(fetchTodos());
	};

	

	return (
		<>
			<S.FilterButton style={{width: '144px'}} onClick={toggleYear} $visibleFilter={$visibleFilter}>
				Году выпуска
			</S.FilterButton>
			<S.ByYearMegaBlock $visibleFilter={$visibleFilter}>
				<S.ByYearBlock>
					<S.ByText
						style={{
							color: `${sortYearDefault ? '#b672ff' : '#ffffff'}`,
							textDecoration: `${sortYearDefault ? 'underline' : 'none'}`,
						}}
						onClick={handleSortStartFromDefault}
					>
						По умолчанию
					</S.ByText>
					<S.ByText
						style={{
							color: `${sortYearNew ? '#b672ff' : '#ffffff'}`,
							textDecoration: `${sortYearNew ? 'underline' : 'none'}`,
						}}
						onClick={handleSortStartFromTheNew}
					>
						Сначала новые
					</S.ByText>
					<S.ByText
						style={{
							color: `${sortYearOld ? '#b672ff' : '#ffffff'}`,
							textDecoration: `${sortYearOld ? 'underline' : 'none'}`,
						}}
						onClick={handleSortStartFromTheOld}
					>
						Сначала старые
					</S.ByText>
				</S.ByYearBlock>
			</S.ByYearMegaBlock>
		</>
	);
};
