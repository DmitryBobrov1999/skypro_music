import './burgerBlock.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function BurgerBlock() {

	const [visible, setVisible] = useState(true);

	const toggleVisibility = () => setVisible(!visible);

	return (
		<>
			<div className='nav__burger burger' onClick={toggleVisibility}>
				<span className='burger__line' />
				<span className='burger__line' />
				<span className='burger__line' />
			</div>
			<div className='nav__menu menu' style={{ visibility: `${visible ? 'visible' : 'hidden'}` }}>
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
		</>
	);
}
