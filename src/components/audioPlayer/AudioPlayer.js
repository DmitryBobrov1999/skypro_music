import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTrack, setIsPlaying } from '../../redux/slice/todo';

import * as S from './AudioPlayer.styles';

export const CreateAudioPlayer = ({
	isPlaying,
	audioRef,
	ProgressBar,
	progressBarRef,
	duration,
	timeProgress,
	handleProgressChange,
	formatTime,
	volume,
	setVolume,
	onLoadedMetadata,
	loop,
	setLoop,
	currentPlayer,
	todos,
	selectedTrackId,
	setSelectedTrackId,
}) => {
	const dispatch = useDispatch();

	const handleBack = () => {
		if (selectedTrackId === todos[0].id) {
			dispatch(setCurrentTrack(todos[selectedTrackId - todos[0].id]));
		} else {
			setSelectedTrackId(prev => prev - 1);
			dispatch(setCurrentTrack(todos[selectedTrackId - todos[0].id]));
		}
	};

	const handleNext = () => {
		if (selectedTrackId - todos[0].id + 1 >= todos.length) {
			dispatch(setCurrentTrack(todos[todos.length - 1]));
		} else {
			setSelectedTrackId(prev => prev + 1);
			dispatch(setCurrentTrack(todos[selectedTrackId - todos[0].id + 1]));
		}
	};

	return (
		<>
			{currentPlayer ? (
				<>
					<audio
						onLoadedMetadata={onLoadedMetadata}
						ref={audioRef}
						src={currentPlayer.track_file}
						onEnded={handleNext}
					></audio>

					<S.Bar key={currentPlayer.id}>
						<S.TimeDiv>
							<S.TimePar>{formatTime(timeProgress)}</S.TimePar>
							<S.TimePar> / </S.TimePar>
							<S.TimePar>{formatTime(duration)}</S.TimePar>
						</S.TimeDiv>
						<S.BarContent>
							<ProgressBar
								currentTime={timeProgress}
								duration={duration}
								progressBarRef={progressBarRef}
								handleProgressChange={handleProgressChange}
							/>

							<S.BarPlayerBlock>
								<S.BarPlayer>
									<S.PlayerControls>
										<S.PlayerBtnPrev onClick={handleBack}>
											<S.PlayerBtnPrevSvg alt='prev'>
												<use xlinkHref='/img/icon/sprite.svg#icon-prev' />
											</S.PlayerBtnPrevSvg>
										</S.PlayerBtnPrev>
										<S.PlayerBtnPlay
											onClick={() => {
												dispatch(setIsPlaying(isPlaying));
											}}
										>
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
											<S.PlayerBtnNextSvg onClick={handleNext} alt='next'>
												<use xlinkHref='/img/icon/sprite.svg#icon-next' />
											</S.PlayerBtnNextSvg>
										</S.PlayerBtnNext>
										<S.PlayerBtnRepeat loop={loop}>
											<S.PlayerBtnRepeatSvg
												onClick={() => setLoop(!loop)}
												alt='repeat'
											>
												<use xlinkHref='/img/icon/sprite.svg#icon-repeat' />
											</S.PlayerBtnRepeatSvg>
										</S.PlayerBtnRepeat>
										<S.PlayerBtnShuffle>
											<S.PlayerBtnShuffleSvg
												onClick={() => {
													alert('Еще не реализовано');
												}}
												alt='shuffle'
											>
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
												onChange={e => setVolume(e.target.value)}
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
