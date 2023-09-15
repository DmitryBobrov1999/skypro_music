import React, { useRef, useState } from 'react';

import * as S from './AudioPlayer.styles';

export const CreateAudioPlayer = ({
	currentPlayer,
	isPlaying,
	audioRef,
	togglePlay,
	ProgressBar,
}) => {
	const [currentTime, setCurrentTime] = useState(0);

	const [duration, setDuration] = useState(0);

	const progressBarRef = useRef();

	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	const formatTime = time => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const seconds = Math.floor(time % 60);
			const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${formatMinutes}:${formatSeconds}`;
		}
		return '00:00';
	};

	return (
		<>
			{currentPlayer ? (
				<>
					<audio
						onLoadedMetadata={onLoadedMetadata}
						ref={audioRef}
						src={currentPlayer.track_file}
						autoPlay
					></audio>

					<S.Bar key={currentPlayer.id}>
						<S.TimeDiv>
							<S.TimePar>{formatTime(currentTime)}</S.TimePar>
							<S.TimePar> / </S.TimePar>
							<S.TimePar>{formatTime(duration)}</S.TimePar>
						</S.TimeDiv>
						<S.BarContent>
							<ProgressBar
								audioRef={audioRef}
								setCurrentTime={setCurrentTime}
								currentTime={currentTime}
								duration={duration}
								progressBarRef={progressBarRef}
							/>

							<S.BarPlayerBlock>
								<S.BarPlayer>
									<S.PlayerControls>
										<S.PlayerBtnPrev>
											<S.PlayerBtnPrevSvg alt='prev'>
												<use xlinkHref='/img/icon/sprite.svg#icon-prev' />
											</S.PlayerBtnPrevSvg>
										</S.PlayerBtnPrev>
										<S.PlayerBtnPlay onClick={togglePlay}>
											{isPlaying ? (
												<S.PlayerBtnPlaySvg alt='play'>
													<use xlinkHref='/img/icon/sprite.svg#icon-play' />
												</S.PlayerBtnPlaySvg>
											) : (
												<S.PlayerBtnPauseSvg alt='pause'>
													<use xlinkHref='/img/icon/sprite.svg#icon-pause' />
												</S.PlayerBtnPauseSvg>
											)}
										</S.PlayerBtnPlay>
										<S.PlayerBtnNext>
											<S.PlayerBtnNextSvg alt='next'>
												<use xlinkHref='/img/icon/sprite.svg#icon-next' />
											</S.PlayerBtnNextSvg>
										</S.PlayerBtnNext>
										<S.PlayerBtnRepeat>
											<S.PlayerBtnRepeatSvg alt='repeat'>
												<use xlinkHref='/img/icon/sprite.svg#icon-repeat' />
											</S.PlayerBtnRepeatSvg>
										</S.PlayerBtnRepeat>
										<S.PlayerBtnShuffle>
											<S.PlayerBtnShuffleSvg alt='shuffle'>
												<use xlinkHref='/img/icon/sprite.svg#icon-shuffle' />
											</S.PlayerBtnShuffleSvg>
										</S.PlayerBtnShuffle>
									</S.PlayerControls>
									<S.PlayerTrackPlay>
										<S.TrackPlayContain>
											<S.TrackPlayImage>
												<S.TrackPlaySvg alt='music'>
													<use xlinkHref='/img/icon/sprite.svg#icon-note' />
												</S.TrackPlaySvg>
											</S.TrackPlayImage>
											<S.TrackPlayAuthor>
												<S.TrackPlayAuthorLink>
													{currentPlayer.name}
												</S.TrackPlayAuthorLink>
											</S.TrackPlayAuthor>
											<S.TrackPlayAlbum>
												<S.TrackPlayAlbumLink>
													{currentPlayer.author}
												</S.TrackPlayAlbumLink>
											</S.TrackPlayAlbum>
										</S.TrackPlayContain>
										<S.TrackPlayLikeDis>
											<S.TrackPlayLike>
												<S.TrackPlayLikeSvg alt='like'>
													<use xlinkHref='/img/icon/sprite.svg#icon-like' />
												</S.TrackPlayLikeSvg>
											</S.TrackPlayLike>
											<S.TrackPlayDislike>
												<S.TrackPlayDislikeSvg alt='dislike'>
													<use xlinkHref='/img/icon/sprite.svg#icon-dislike' />
												</S.TrackPlayDislikeSvg>
											</S.TrackPlayDislike>
										</S.TrackPlayLikeDis>
									</S.PlayerTrackPlay>
								</S.BarPlayer>
								<S.BarVolumeBlock>
									<S.VolumeContent>
										<S.VolumeImage>
											<S.VolumeSvg alt='volume'>
												<use xlinkHref='/img/icon/sprite.svg#icon-volume' />
											</S.VolumeSvg>
										</S.VolumeImage>
										<S.VolumeProgress>
											<S.VolumeProgressLine type='range' name='range' />
										</S.VolumeProgress>
									</S.VolumeContent>
								</S.BarVolumeBlock>
							</S.BarPlayerBlock>
						</S.BarContent>
					</S.Bar>
				</>
			) : null}
		</>
	);
};
