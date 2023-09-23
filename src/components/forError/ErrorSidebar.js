import React from 'react';
import * as S from '../sidebar/Sidebar.styles';
import { NavLink } from 'react-router-dom';
import { CreateSidebarPersonalName } from '../sidebar/Sidebar';
export const ErrorSidebar = ({ removeUser }) => {

	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<CreateSidebarPersonalName />
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
