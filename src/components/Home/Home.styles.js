import styled from 'styled-components';

// ._btn-icon:hover svg {
//   fill: transparent;
//   stroke: #acacac;
//   cursor: pointer;
// }

// ._btn-icon:active svg {
//   fill: transparent;
//   stroke: #ffffff;
//   cursor: pointer;
// }

// ._btn-icon:active .track-play__like-svg,
// ._btn-icon:active .track-play__dislike-svg {
//   fill: #696969;
//   stroke: #ffffff;
//   cursor: pointer;
// }

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
