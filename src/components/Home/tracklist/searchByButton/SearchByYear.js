import React from 'react';
import '../tracklist.css';

export default function SearchByYear({
	yearData,
	visibleFilter,
	openFilter,
	closeAllFilters,
}) {
	
	const yearList = yearData.map(data => {
		return (
			<p className='byPar' key={data.id}>
				{data.year}
			</p>
		);
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
		color: `${visibleFilter ? '#9A48F1' : '#ffffff'}`,
		borderColor: `${visibleFilter ? '#9A48F1' : '#ffffff'}`,
	};

	return (
		<>
			<div
				className='filter__button button-year _btn-text'
				onClick={toggleYear}
				style={styles}
			>
				Году выпуска
			</div>
			<div
				className='byYearMegaBlock'
				style={{
					visibility: `${visibleFilter ? 'visible' : 'hidden'}`,
				}}
			>
				<div className='byYearBlock'>{yearList}</div>
			</div>
		</>
	);
}
