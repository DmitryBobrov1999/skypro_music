import './navMenu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CreateNavMenu() {
	return (
		<nav className='main__nav nav'>
			<div className='nav__logo logo'>
				<img className='logo__image' src='img/logo.png' alt='logo' />
			</div>
			<div className='nav__burger burger'>
				<span className='burger__line' />
				<span className='burger__line' />
				<span className='burger__line' />
			</div>
			<div className='nav__menu menu'>
				<ul className='menu__list'>
					<li className='menu__item'>
						<NavLink to='#' className='menu__link'>
							Главное
						</NavLink>
					</li>
					<li className='menu__item'>
						<NavLink to='#' className='menu__link'>
							Мой плейлист
						</NavLink>
					</li>
					<li className='menu__item'>
						<NavLink to='/signin' className='menu__link'>
							Войти
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}