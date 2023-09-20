import React, { useContext } from 'react';
import { useState } from 'react';
import * as S from './BurgerBlock.styles';
import { NavMenuContext } from '../../../pages/main/MainPage';

export const BurgerBlock = () => {
	const [visible, setVisible] = useState(true);

	const toggleVisibility = () => setVisible(!visible);

	const context = useContext(NavMenuContext);

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
					<S.MenuItem onClick={context}>
						<S.MenuLink to='/login'>Выйти</S.MenuLink>
					</S.MenuItem>
				</S.MenuList>
			</S.NavMenu>
		</>
	);
};
