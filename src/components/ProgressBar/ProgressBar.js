import * as S from './ProgressBar.styles';

export const ProgressBar = ({

	duration,
	currentTime,
	progressBarRef,
	handleProgressChange,
}) => {
	

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
