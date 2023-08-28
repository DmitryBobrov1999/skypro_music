import styled from 'styled-components';

export const Main = styled.div`
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
`;

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	background-color: #383838;
`;

export const Container = styled.div`
	max-width: 1920px;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: #181818;
`;

export const MainCenterBlock = styled.div`
	width: auto;
	-webkit-box-flex: 3;
	-ms-flex-positive: 3;
	flex-grow: 3;
	padding: 20px 40px 20px 111px;
`;

export const CenterblockSearch = styled.div`
	width: 100%;
	border-bottom: 1px solid #4e4e4e;
	margin-bottom: 51px;
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
`;

export const SearchSvg = styled.svg`
	width: 17px;
	height: 17px;
	margin-right: 5px;
	stroke: #ffffff;
	fill: transparent;
`;

export const SearchText = styled.input`
	-webkit-box-flex: 100;
	-ms-flex-positive: 100;
	flex-grow: 100;
	background-color: transparent;
	border: none;
	padding: 13px 10px 14px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	&::-webkit-input-placeholder {
		background-color: transparent;
		color: #ffffff;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
	}
	&::-ms-input-placeholder {
		background-color: transparent;
		color: #ffffff;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
	}
	&::placeholder {
		background-color: transparent;
		color: #ffffff;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
	}
`;


export const ErrorBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 234px;
`;

export const ErrorName = styled.p`
	color: #ffffff;
	font-size: 160px;
	font-weight: 400;
	line-height: 168px;
	letter-spacing: 0px;
	text-align: left;
`;

export const ErrorSvgName = styled.p`
	font-size: 32px;
	font-weight: 400;
	line-height: 40px;
	letter-spacing: 0em;
	text-align: left;
	color: #ffffff;
`;

export const ErrorSvgBlock = styled.div`
	display: flex;
	margin-top: 2px;
`;

export const ErrorSvg = styled.img`
width:52px;
height:52px
	margin-left: 8px;
`;

export const ErrorWhere = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.003em;
	text-align: center;
	color: #4e4e4e;
	width: 270px;
	margin-top: 8px;
`;

export const ErrorBackToMain = styled.button`
	margin-top: 36px;
	width: 278px;
	height: 52px;
	border-radius: 6px;

	background: #580ea2;

	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.003em;
	& a {
		color: #ffffff;
	}
`;


export const CenterblockH2 = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 72px;
	letter-spacing: -0.8px;
	margin-bottom: 45px;
`;

export const CenterblockFilter = styled.div`
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
	margin-bottom: 51px;
	position: relative;
`;

export const CenterblockContent = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`;



export const FilterTitle = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-right: 15px;
`;

export const ContentTitle = styled.div`
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
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	margin-bottom: 24px;
`;

export const ContentPlaylist = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	overflow-y: auto;
`;

export const PlaylistTitleCol1 = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 2px;
	color: #696969;
	text-transform: uppercase;
	width: 447px;
`;

export const PlaylistTitleCol2 = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 2px;
	color: #696969;
	text-transform: uppercase;
	width: 321px;
`;

export const PlaylistTitleCol3 = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 2px;
	color: #696969;
	text-transform: uppercase;
	width: 245px;
`;

export const PlaylistTitleCol4 = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 2px;
	color: #696969;
	text-transform: uppercase;
	width: 60px;
	text-align: end;
`;

export const PlaylistTitleSvg = styled.svg`
	width: 12px;
	height: 12px;
	fill: transparent;
	stroke: #696969;
`;


