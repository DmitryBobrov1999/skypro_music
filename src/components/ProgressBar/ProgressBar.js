import { useEffect, useRef, useState } from 'react';
import * as S from './ProgressBar.styles';

export const ProgressBar = ({
	audioRef,
	duration,
	setCurrentTime,
	currentTime,
	progressBarRef,
}) => {
	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
		progressBarRef.current.style.setProperty(
			'--seek-before-width',
			`${(progressBarRef.current.value / duration) * 100}%`
		);
		setCurrentTime(audioRef.current.currentTime);
	};

	return (
		<S.StyledProgressInput
			ref={progressBarRef}
			type='range'
			min={0}
			max={duration}
			value={currentTime}
			step={0.01}
			onChange={handleProgressChange}
			$color='#ff0000'
		/>
	);
};
