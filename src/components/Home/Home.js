import './style.css';
import React from 'react';
import CreateAudioPlayer from './audioPlayer/AudioPlayer.js';
import CreateSidebar from './sidebar/Sidebar.js';
import CreateTracklist from './tracklist/Tracklist.js';
import CreateNavMenu from './navMenu/NavMenu.js'

export default function Home() {
	return (
		<div className='wrapper'>
			<div className='container'>
				<main className='main'>
					<CreateNavMenu/>
					<CreateTracklist />
					<CreateSidebar />
				</main>

				<CreateAudioPlayer />

				<footer className='footer'></footer>
			</div>
		</div>
	);
}
