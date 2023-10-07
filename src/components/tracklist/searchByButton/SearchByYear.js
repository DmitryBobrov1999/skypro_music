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
			<S.FilterButton onClick={toggleYear} $visibleFilter={$visibleFilter}>
				Году выпуска
			</S.FilterButton>
			<S.ByYearMegaBlock $visibleFilter={$visibleFilter}>
				<S.ByYearBlock>
					<S.ByText
						data-index='default'
						$sortYearDefault={sortYearDefault}
						onClick={handleSortStartFromDefault}
					>
						По умолчанию
					</S.ByText>
					<S.ByText
						$sortYearNew={sortYearNew}
						onClick={handleSortStartFromTheNew}
					>
						Сначала новые
					</S.ByText>
					<S.ByText
						$sortYearOld={sortYearOld}
						onClick={handleSortStartFromTheOld}
					>
						Сначала старые
					</S.ByText>
				</S.ByYearBlock>
			</S.ByYearMegaBlock>
		</>
	);
};
