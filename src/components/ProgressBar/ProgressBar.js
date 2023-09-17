import * as S from './ProgressBar.styles';

export const ProgressBar = ({
	duration,
	progressBarRef,
	handleProgressChange,
}) => {
	return (
		<S.StyledProgressInput
			ref={progressBarRef}
			defaultValue='0'
			type='range'
			min={0}
			max={duration}
			step={0.01}
			onChange={handleProgressChange}
		/>
	);
};
