import CreateAudioPlayer from '../../components/audioPlayer/AudioPlayer';
import CreateSidebar from '../../components/sidebar/Sidebar';
import CreateTracklist from '../../components/tracklist/Tracklist';
import CreateNavMenu from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';
import React, { useEffect, useState } from 'react';
import { getTracks } from '../../api';

export default function Home({
	isLoading,
	sendFalseToLocalStorage,
	sendTrueToLocalStorage,
	user,
}) {
	const [tracks, setTracks] = useState([]);

const [addTodoError, setAddTodoError] = useState(null);

	const [currentPlayer, toCurrentPlayer] = useState(null);

	useEffect(() => {
		getTracks().then(tracks => {
			setTracks(tracks);
		});
	}, []);

	const openPlayer = track => {
		toCurrentPlayer(track);
	};

	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu
						user={user}
						sendTrueToLocalStorage={sendTrueToLocalStorage}
						sendFalseToLocalStorage={sendFalseToLocalStorage}
					/>
					<CreateTracklist
						addTodoError={addTodoError}
						openPlayer={openPlayer}
						tracks={tracks}
						isLoading={isLoading}
					/>
					<CreateSidebar
						sendFalseToLocalStorage={sendFalseToLocalStorage}
						isLoading={isLoading}
					/>
				</S.Main>
				<CreateAudioPlayer currentPlayer={currentPlayer} />
			</S.Container>
		</S.Wrapper>
	);
}
