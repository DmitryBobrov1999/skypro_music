import './style.css';
import CreateAudioPlayer from './audioPlayer/AudioPlayer.js';
import CreateSidebar from './sidebar/Sidebar.js';
import CreateTracklist from './tracklist/Tracklist.js';
import CreateNavMenu from './navMenu/NavMenu.js';

export default function Home({ isLoading }) {
	return (
		<div className='wrapper'>
			<div className='container'>
				<main className='main'>
					<CreateNavMenu />
					<CreateTracklist isLoading={isLoading}/>
					<CreateSidebar isLoading={isLoading} />
				</main>
				<CreateAudioPlayer isLoading={isLoading} />
				<footer className='footer'></footer>
			</div>
		</div>
	);
}
