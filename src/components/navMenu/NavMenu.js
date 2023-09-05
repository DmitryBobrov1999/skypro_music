import React from 'react';
import { BurgerBlock } from './burgerBlock/BurgerBlock.js';
import * as S from './NavMenu.styles'

export const CreateNavMenu = ({
	sendTrueToLocalStorage,
	user,
	sendFalseToLocalStorage,
}) => {
	return (
		<S.MainMenu>
			<S.NavLogo>
				<S.LogoImage src='/img/logo.png' alt='logo' />
			</S.NavLogo>
			<BurgerBlock
				sendTrueToLocalStorage={sendTrueToLocalStorage}
				user={user}
				sendFalseToLocalStorage={sendFalseToLocalStorage}
			/>
		</S.MainMenu>
	);
};
