import './navMenu.css';
import React from 'react';
import BurgerBlock from './burgerBlock/BurgerBlock.js';

export default function CreateNavMenu() {
	return (
		<nav className='main__nav nav'>
			<div className='nav__logo logo'>
				<img className='logo__image' src='img/logo.png' alt='logo' />
			</div>
			<BurgerBlock />
		</nav>
	);
}
