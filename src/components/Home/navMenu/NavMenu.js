import React from 'react';
import BurgerBlock from './burgerBlock/BurgerBlock.js';
import * as S from './NavMenu.styles'

export default function CreateNavMenu() {
	return (
		<S.MainMenu>
			<S.NavLogo>
				<S.LogoImage src='/img/logo.png' alt='logo' />
			</S.NavLogo>
			<BurgerBlock />
		</S.MainMenu>
	);
}
