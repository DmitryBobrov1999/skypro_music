import CreateAudioPlayer from '../../components/audioPlayer/AudioPlayer';
import CreateSidebar from '../../components/sidebar/Sidebar';
import CreateTracklist from '../../components/tracklist/Tracklist';
import CreateNavMenu from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';
import React from 'react';

export default function Home({
	isLoading,
	sendFalseToLocalStorage,
	sendTrueToLocalStorage,
	user,
}) {


	
	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu
						user={user}
						sendTrueToLocalStorage={sendTrueToLocalStorage}
						sendFalseToLocalStorage={sendFalseToLocalStorage}
					/>
					<CreateTracklist isLoading={isLoading} />
					<CreateSidebar
						sendFalseToLocalStorage={sendFalseToLocalStorage}
						isLoading={isLoading}
					/>
				</S.Main>
				<CreateAudioPlayer isLoading={isLoading} />
			</S.Container>
		</S.Wrapper>
	);
}
