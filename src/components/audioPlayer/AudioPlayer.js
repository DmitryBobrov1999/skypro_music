import React from 'react';

import * as S from './AudioPlayer.styles';

export const CreateAudioPlayer = ({
	currentPlayer,
	isPlaying,
	audioRef,
	togglePlay,
	ProgressBar,
	progressBarRef,
	duration,
	setDuration,
	currentTime,
	handleProgressChange,
	formatTime,
	volume,
	setVolume
}) => {
	
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	return (
		<>
			{currentPlayer ? (
				<>
					<audio
						onLoadedMetadata={onLoadedMetadata}
						ref={audioRef}
						src={currentPlayer.track_file}
					></audio>

					<S.Bar key={currentPlayer.id}>
						<S.TimeDiv>
							<S.TimePar>{formatTime(currentTime)}</S.TimePar>
							<S.TimePar> / </S.TimePar>
							<S.TimePar>{formatTime(duration)}</S.TimePar>
						</S.TimeDiv>
						<S.BarContent>
							<ProgressBar
								currentTime={currentTime}
								duration={duration}
								progressBarRef={progressBarRef}
								handleProgressChange={handleProgressChange}
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
												<S.PlayerBtnPauseSvg alt='pause'>
													<use xlinkHref='/img/icon/sprite.svg#icon-pause' />
												</S.PlayerBtnPauseSvg>
											) : (
												<S.PlayerBtnPlaySvg alt='play'>
													<use xlinkHref='/img/icon/sprite.svg#icon-play' />
												</S.PlayerBtnPlaySvg>
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
											<S.VolumeProgressLine
												type='range'
												name='range'
												min={0}
												max={100}
												value={volume}
												onChange={() => setVolume()}
											/>
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
