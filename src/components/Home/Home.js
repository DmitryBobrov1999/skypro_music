import CreateAudioPlayer from './audioPlayer/AudioPlayer.js';
import CreateSidebar from './sidebar/Sidebar.js';
import CreateTracklist from './tracklist/Tracklist.js';
import CreateNavMenu from './navMenu/NavMenu.js';
import * as S from './Home.styles'

export default function Home({ isLoading }) {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu />
					<CreateTracklist isLoading={isLoading}/>
					<CreateSidebar isLoading={isLoading} />
				</S.Main>
				<CreateAudioPlayer isLoading={isLoading} />
				<footer className='footer'></footer>
			</S.Container>
		</S.Wrapper>
	);
}
