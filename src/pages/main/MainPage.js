import CreateAudioPlayer from '../../components/audioPlayer/AudioPlayer';
import CreateSidebar from '../../components/sidebar/Sidebar';
import CreateTracklist from '../../components/tracklist/Tracklist';
import CreateNavMenu from '../../components/navMenu/NavMenu';
import * as S from './MainPage.styles';
import React from 'react';
export default function Home({ isLoading }) {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu />
					<CreateTracklist isLoading={isLoading} />
					<CreateSidebar isLoading={isLoading} />
				</S.Main>
				<CreateAudioPlayer isLoading={isLoading} />
				<footer className='footer'></footer>
			</S.Container>
		</S.Wrapper>
	);
}
