import React from 'react';
import { useState } from 'react';
import * as S from './BurgerBlock.styles'

export default function BurgerBlock() {
	const [visible, setVisible] = useState(true);

	const toggleVisibility = () => setVisible(!visible);

	return (
		<>
			<S.NavBurger onClick={toggleVisibility}>
				<S.BurgerLine />
				<S.BurgerLine />
				<S.BurgerLine />
			</S.NavBurger>
			<S.NavMenu
				style={{ visibility: `${visible ? 'visible' : 'hidden'}` }}
			>
				<S.MenuList>
					<S.MenuItem>
						<S.MenuLink to='#' >
							Главное
						</S.MenuLink>
					</S.MenuItem>
					<S.MenuItem>
						<S.MenuLink to='#' >
							Мой плейлист
						</S.MenuLink>
					</S.MenuItem>
					<S.MenuItem>
						<S.MenuLink to='/signin'>
							Войти
						</S.MenuLink>
					</S.MenuItem>
				</S.MenuList>
			</S.NavMenu>
		</>
	);
}
