import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTrack, setIsPlaying } from '../../redux/slice/todoSlice'

import * as S from './AudioPlayer.styles';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const CreateAudioPlayer = ({ setSelectedTrackId }) => {
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

	const dispatch = useDispatch();

	const [isShuffle, setIsShuffle] = useState(false);

	const audioRef = useRef();

	const [timeProgress, setTimeProgress] = useState(null);

	const progressBarRef = useRef();

	const [loop, setLoop] = useState(false);

	const [volume, setVolume] = useState(2);

	const [duration, setDuration] = useState(null);

	const playAnimationRef = useRef();

	const { isPlaying, todos, currentPlayer, favoriteTodos, isFavoriteList } =
		useSelector(state => state.trackList);

	useEffect(() => {
		if (audioRef && audioRef.current) {
			audioRef.current.loop = loop;
		}
	}, [loop, audioRef]);

	useEffect(() => {
		if (audioRef && audioRef?.current) {
			audioRef.current.volume = volume / 100;
		}
	});

	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
		setTimeProgress(audioRef.current.currentTime);
	};

	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	const repeat = useCallback(() => {
		if (audioRef && audioRef.current) {
			const currentTime = audioRef.current.currentTime;
			setTimeProgress(currentTime);
			progressBarRef.current.value = currentTime;
			progressBarRef.current.style.setProperty(
				'--range-progress',
				`${(progressBarRef.current.value / duration) * 100}%`
			);
		}

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	useEffect(() => {
		if (isPlaying) {
			audioRef?.current?.pause();
		} else {
			audioRef?.current?.play();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, repeat]);

	const handleBack = () => {
		const todosIndex = todos.indexOf(currentPlayer);
		const favoriteTodosIndex = favoriteTodos.indexOf(currentPlayer);

		if (todosIndex === 0 && !isFavoriteList) {
			dispatch(setCurrentTrack(todos[0]));
			setSelectedTrackId(todos[0].id);
		} else if (todosIndex !== 0 && !isFavoriteList) {
			const prevTrack = todos[todosIndex - 1];
			dispatch(setCurrentTrack(prevTrack));
			setSelectedTrackId(prevTrack.id);
		} else if (favoriteTodosIndex === 0 && isFavoriteList) {
			dispatch(setCurrentTrack(favoriteTodos[0]));
			setSelectedTrackId(favoriteTodos[0].id);
		} else {
			const prevTrack = favoriteTodos[favoriteTodosIndex - 1];
			dispatch(setCurrentTrack(prevTrack));
			setSelectedTrackId(prevTrack.id);
		}
	};

	const handleNext = () => {
		const todosIndex = todos.indexOf(currentPlayer);
		const favoriteTodosIndex = favoriteTodos.indexOf(currentPlayer);

		if (todosIndex === todos.length - 1 && !isFavoriteList) {
			dispatch(setCurrentTrack(todos[todos.length - 1]));
			setSelectedTrackId(todos[todos.length - 1].id);
		} else if (favoriteTodos !== todos.length - 1 && !isFavoriteList) {
			const nextTrack = todos[todosIndex + 1];
			dispatch(setCurrentTrack(nextTrack));
			setSelectedTrackId(nextTrack.id);
		} else if (
			favoriteTodosIndex === favoriteTodos.length - 1 &&
			isFavoriteList
		) {
			dispatch(setCurrentTrack(favoriteTodos[favoriteTodos.length - 1]));
			setSelectedTrackId(favoriteTodos[favoriteTodos.length - 1].id);
		} else {
			const nextTrack = favoriteTodos[favoriteTodosIndex + 1];
			dispatch(setCurrentTrack(nextTrack));
			setSelectedTrackId(nextTrack.id);
		}
	};

	const shuffleTracks = () => {
		let prevNum;
		
		const randomNum = Math.floor(Math.random() * todos.length);
		const randomFavNum = Math.floor(Math.random() * favoriteTodos.length);

		if (prevNum === randomNum && !isFavoriteList) {
			let newRandomNum = randomNum === 0 ? randomNum + 1 : randomNum - 1;
			prevNum = newRandomNum;

			setSelectedTrackId(todos[newRandomNum].id);
			dispatch(setCurrentTrack(todos[newRandomNum]));
		} else if (prevNum !== randomNum && !isFavoriteList) {
			prevNum = randomNum;
			setSelectedTrackId(todos[randomNum].id);
			dispatch(setCurrentTrack(todos[randomNum]));
		} else if (prevNum === randomFavNum && isFavoriteList) {
			let newRandomNum =
				randomFavNum === 0 ? randomFavNum + 1 : randomFavNum - 1;
			prevNum = newRandomNum;

			setSelectedTrackId(favoriteTodos[newRandomNum].id);
			dispatch(setCurrentTrack(favoriteTodos[newRandomNum]));
		} else {
			prevNum = randomFavNum;
			setSelectedTrackId(favoriteTodos[randomFavNum].id);
			dispatch(setCurrentTrack(favoriteTodos[randomFavNum]));
		}
	};

	const toSetIsPlaying = () => {
		dispatch(setIsPlaying(isPlaying));
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
								duration={duration}
								progressBarRef={progressBarRef}
								handleProgressChange={handleProgressChange}
							/>

							<S.BarPlayerBlock>
								<S.BarPlayer>
									<S.PlayerControls>
										<S.PlayerBtnPrev
											onClick={isShuffle ? shuffleTracks : handleBack}
										>
											<S.PlayerBtnPrevSvg alt='prev'>
												<use xlinkHref='/img/icon/sprite.svg#icon-prev' />
											</S.PlayerBtnPrevSvg>
										</S.PlayerBtnPrev>
										<S.PlayerBtnPlay onClick={toSetIsPlaying}>
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
											<S.PlayerBtnNextSvg
												onClick={isShuffle ? shuffleTracks : handleNext}
												alt='next'
											>
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
										<S.PlayerBtnShuffle $isShuffle={isShuffle}>
											<S.PlayerBtnShuffleSvg
												onClick={() => {
													setIsShuffle(!isShuffle);
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
