import CreateAudioPlayer from '../../components/home/audioPlayer/AudioPlayer.js';
import CreateSidebar from '../../components/home/sidebar/Sidebar.js';
import CreateTracklist from '../../components/home/tracklist/Tracklist.js';
import CreateNavMenu from '../../components/home/navMenu/NavMenu.js';
import * as S from './MainPage.styles';

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
