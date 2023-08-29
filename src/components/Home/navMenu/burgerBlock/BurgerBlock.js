import React from 'react';
import { useState } from 'react';
import * as S from './BurgerBlock.styles'

export default function BurgerBlock() {
	const [visible, setVisible] = useState(true);

	const toggleVisibility = () => setVisible(!visible);

	const sendFalseToLocalStorage = () => {
		window.localStorage.setItem('user', false);
	};

	return (
		<>
			<S.NavBurger onClick={toggleVisibility}>
				<S.BurgerLine />
				<S.BurgerLine />
				<S.BurgerLine />
			</S.NavBurger>
			<S.NavMenu style={{ visibility: `${visible ? 'visible' : 'hidden'}` }}>
				<S.MenuList>
					<S.MenuItem>
						<S.MenuLink to='/'>Главное</S.MenuLink>
					</S.MenuItem>
					<S.MenuItem>
						<S.MenuLink to='/favorite'>Мой плейлист</S.MenuLink>
					</S.MenuItem>
					<S.MenuItem onClick={sendFalseToLocalStorage}>
						<S.MenuLink to='/login'>Выйти</S.MenuLink>
					</S.MenuItem>
				</S.MenuList>
			</S.NavMenu>
		</>
	);
}
