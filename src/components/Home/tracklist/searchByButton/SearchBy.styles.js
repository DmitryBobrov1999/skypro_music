import styled from 'styled-components';

export const FilterButton = styled.div`
	color: ${props => (props.$visibleFilter ? '#9A48F1' : '')};
	border-color: ${props => (props.$visibleFilter ? '#9A48F1' : '')};
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: 1px solid;
	border-radius: 60px;
	padding: 6px 20px;
	&:hover {
		border-color: ${props => (props.$visibleFilter ? '' : '#d9b6ff')};
		color: ${props => (props.$visibleFilter ? '' : '#d9b6ff')};
		cursor: pointer;
	}

	&:not(:last-child) {
		margin-right: 10px;
	}
`;
export const ByYearMegaBlock = styled.div`
	visibility: ${props => (props.$visibleFilter ? 'visible' : 'hidden')};
	width: 221px;
	height: 196px;
	padding: 34px;
	border-radius: 12px;
	gap: 10px;
	position: absolute;
	top: 49px;
	left: 246px;
	background: #313131;
`;

export const ByYearBlock = styled.div`
	width: 153px;
	height: 128px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ByPar = styled.p`
	width: 152px;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	cursor: pointer;
	color: #ffffff;
	&:hover {
		color: #b672ff;
		text-decoration: underline;
	}
`;

export const byArtistMegaBlock = styled.div`
	visibility: ${props => (props.$visibleFilter ? 'visible' : 'hidden')};
	padding: 34px;
	width: 248px;
	height: 305px;
	background: #313131;
	border-radius: 12px;
	position: absolute;
	top: 49px;
	left: 92px;
`;

export const byArtistBlock = styled.div`
	overflow-y: scroll;
	width: 180px;
	height: 237px;
	display: flex;
	flex-direction: column;
	gap: 28px;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #ffffff;
	}
`;

export const ByGenreMegaBlock = styled.div`
	visibility: ${props => (props.$visibleFilter ? 'visible' : 'hidden')};
	padding: 34px;
	width: 248px;
	height: 305px;
	background: #313131;
	border-radius: 12px;
	position: absolute;
	top: 49px;
	left: 392px;
`;
