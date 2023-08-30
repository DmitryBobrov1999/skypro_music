import React from 'react';
import * as S from '../sidebar/Sidebar.styles';
import { NavLink } from 'react-router-dom';

export default function ErrorSidebar() {
	const sendFalseToLocalStorage = () => {
		window.localStorage.setItem('user', false);
	};

	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
				<S.SidebarIcon onClick={sendFalseToLocalStorage}>
					<NavLink to='/login'>
						<svg alt='logout'>
							<use xlinkHref='/img/icon/sprite.svg#logout' />
						</svg>
					</NavLink>
				</S.SidebarIcon>
			</S.SidebarPersonal>
		</S.MainSidebar>
	);
}
