import React from 'react';
import { useState } from 'react';
import * as S from './BurgerBlock.styles'

export const BurgerBlock = ({
	user,
	sendFalseToLocalStorage,
	sendTrueToLocalStorage,
}) => {
	const [visible, setVisible] = useState(true);

	const toggleVisibility = () => setVisible(!visible);

	function burgerLogic() {
		if (user === 'true') {
			return (
				<S.MenuItem onClick={sendFalseToLocalStorage}>
					<S.MenuLink to='/login'>Выйти</S.MenuLink>
				</S.MenuItem>
			);
		} else {
			return (
				<S.MenuItem onClick={sendTrueToLocalStorage}>
					<S.MenuLink to='/'>Войти</S.MenuLink>
				</S.MenuItem>
			);
		}
	}

	return (
		<>
			<S.NavBurger onClick={toggleVisibility}>
				<S.BurgerLine />
				<S.BurgerLine />
				<S.BurgerLine />
			</S.NavBurger>
			<S.NavMenu style={{ visibility: `${visible ? 'hidden' : 'visible'}` }}>
				<S.MenuList>
					<S.MenuItem>
						<S.MenuLink to='/'>Главное</S.MenuLink>
					</S.MenuItem>
					<S.MenuItem>
						<S.MenuLink to='/favorite'>Мой плейлист</S.MenuLink>
					</S.MenuItem>
					{burgerLogic()}
				</S.MenuList>
			</S.NavMenu>
		</>
	);
};