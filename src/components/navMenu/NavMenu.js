import React from 'react';
import { BurgerBlock } from './burgerBlock/BurgerBlock.js';
import * as S from './NavMenu.styles';
import { NavLink } from 'react-router-dom';

export const CreateNavMenu = () => {
	return (
		<S.MainMenu>
			<S.NavLogo>
				<NavLink to='/'>
					<S.LogoImage src='img/logo.png' alt='logo' />
				</NavLink>
			</S.NavLogo>
			<BurgerBlock />
		</S.MainMenu>
	);
};
