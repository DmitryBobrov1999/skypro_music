import React from 'react';
import * as S from '../sidebar/Sidebar.styles';
import { NavLink } from 'react-router-dom';

export const ErrorSidebar = ({ removeUser }) => {
	const userLogin = localStorage.getItem('user');
	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<S.SidebarPersonalName>{userLogin}</S.SidebarPersonalName>
				<S.SidebarIcon onClick={removeUser}>
					<NavLink to='/login'>
						<svg alt='logout'>
							<use xlinkHref='/img/icon/sprite.svg#logout' />
						</svg>
					</NavLink>
				</S.SidebarIcon>
			</S.SidebarPersonal>
		</S.MainSidebar>
	);
};
