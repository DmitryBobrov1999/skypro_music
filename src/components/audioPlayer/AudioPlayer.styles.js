import styled from 'styled-components';

export const Bar = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
	width: 100%;
	height: 5px;
	background: #2e2e2e;
`;

export const BarPlayerBlock = styled.div`
	height: 73px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
`;

export const BarPlayer = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
`;

export const PlayerControls = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	padding: 0 27px 0 31px;
`;

export const BarVolumeBlock = styled.div`
	width: auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 0 92px 0 0;
`;

export const PlayerBtnPrev = styled.div`
	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-right: 23px;
	cursor: pointer;
	fill: #d9d9d9;
`;

export const PlayerBtnPrevSvg = styled.svg`
	width: 15px;
	height: 14px;
	fill: #d9d9d9;
	stroke: #d9d9d9;
	&:hover {
		fill: #696969;
		stroke: #696969;
	}
`;

export const PlayerBtnPlay = styled.div`
	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-right: 23px;
	cursor: pointer;
`;

export const PlayerBtnPlaySvg = styled.svg`
	width: 22px;
	height: 20px;
	fill: #d9d9d9;
	&:hover {
		fill: #696969;
	}
`;

export const PlayerBtnPauseSvg = styled.svg`
	width: 22px;
	height: 20px;
	fill: #d9d9d9;
	&:hover {
		fill: #696969;
	}
`;

export const PlayerBtnNext = styled.div`
	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-right: 28px;
	cursor: pointer;
	fill: #d9d9d9;
`;

export const PlayerBtnNextSvg = styled.svg`
	width: 15px;
	height: 14px;
	fill: inherit;
	stroke: #d9d9d9;
	&:hover {
		fill: #696969;
		stroke: #696969;
	}
`;

export const PlayerBtnRepeat = styled.div`
	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-right: 24px;
	stroke: ${props => (props.loop ? '#fff' : '#696969')};
	&:hover svg {
		fill: transparent;
		stroke: ${props => (props.loop ? '' : '#acacac')};
		cursor: pointer;
	}
	&:active svg {
		fill: transparent;
		stroke: #ffffff;
		cursor: pointer;
	}
	&:active {
		fill: #696969;
		stroke: #ffffff;
		cursor: pointer;
	}
`;

export const PlayerBtnRepeatSvg = styled.svg`
	width: 18px;
	height: 12px;
	fill: transparent;
`;

export const PlayerBtnShuffle = styled.div`
	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	stroke: ${props => (props.$isShuffle ? '#fff' : '#696969')};
	&:hover svg {
		fill: transparent;
		stroke: ${props => (props.$isShuffle ? '' : '#acacac')};
		cursor: pointer;
	}
	&:active svg {
		fill: transparent;
		stroke: #ffffff;
		cursor: pointer;
	}
	&:active {
		fill: #696969;
		stroke: #ffffff;
		cursor: pointer;
	}
`;

export const PlayerBtnShuffleSvg = styled.svg`
	width: 19px;
	height: 12px;
	fill: transparent;
`;

export const PlayerTrackPlay = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
`;

export const TrackPlayContain = styled.div`
	width: auto;
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: auto 1fr;
	grid-template-columns: auto 1fr;
	grid-template-areas: 'image author' 'image album';
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`;

export const TrackPlayImage = styled.div`
	width: 51px;
	height: 51px;
	background-color: #313131;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	margin-right: 12px;
	-ms-grid-row: 1;
	-ms-grid-row-span: 2;
	-ms-grid-column: 1;
	grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
	width: 18px;
	height: 17px;
	fill: transparent;
	stroke: #4e4e4e;
`;

export const TrackPlayAuthor = styled.div`
	-ms-grid-row: 1;
	-ms-grid-column: 2;
	grid-area: author;
	min-width: 63px;
`;

export const TrackPlayAuthorLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
	-ms-grid-row: 2;
	-ms-grid-column: 2;
	grid-area: album;
	min-width: 49px;
`;

export const TrackPlayAlbumLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 24px;
	color: #ffffff;
`;

export const TrackPlayLikeDis = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-left: 26%;
`;

export const TrackPlayLike = styled.div`
	padding: 5px;
	&:hover svg {
		fill: transparent;
		stroke: #acacac;
		cursor: pointer;
	}
	&:active svg {
		fill: transparent;
		stroke: #ffffff;
		cursor: pointer;
	}
	&:active {
		fill: #696969;
		stroke: #ffffff;
		cursor: pointer;
	}
`;

export const TrackPlayDislike = styled.div`
	padding: 5px;
	margin-left: 28.5px;
	&:hover svg {
		fill: transparent;
		stroke: #acacac;
		cursor: pointer;
	}
	&:active svg {
		fill: transparent;
		stroke: #ffffff;
		cursor: pointer;
	}
	&:active {
		fill: #696969;
		stroke: #ffffff;
		cursor: pointer;
	}
`;

export const TrackPlayLikeSvg = styled.svg`
	width: 14px;
	height: 12px;
	fill: transparent;
	stroke: #696969;
	&:active {
		fill: #696969;
		stroke: #ffffff;
		cursor: pointer;
	}
`;

export const TrackPlayDislikeSvg = styled.svg`
	width: 14.34px;
	height: 13px;
	fill: transparent;
	stroke: #696969;
	&:active {
		fill: #696969;
		stroke: #ffffff;
		cursor: pointer;
	}
`;

export const VolumeContent = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: end;
`;

export const VolumeImage = styled.div`
	width: 13px;
	height: 18px;
	margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
	width: 13px;
	height: 18px;
	fill: transparent;
`;

export const VolumeProgress = styled.div`
	width: 109px;
	cursor: pointer;
`;

export const VolumeProgressLine = styled.input`
	width: 109px;
	cursor: pointer;
`;

export const TimeDiv = styled.div`
	display: flex;
	width: 81px;
	height: 18px;
	position: absolute;
	right: 5px;
	top: -20px;
`;

export const TimePar = styled.p`
	font-family: StratosSkyeng;
	font-size: 16px;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 0.001em;
	text-align: left;
	color: #696969;
`;
