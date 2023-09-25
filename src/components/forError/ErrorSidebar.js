import React, { useContext} from 'react';
import * as S from '../sidebar/Sidebar.styles';
import { NavLink } from 'react-router-dom';
import { NavMenuContext } from '../../routes';
import { PersonalNameContext } from '../../routes'; 

export const ErrorSidebar = () => {

	const getNavMenuContext = useContext(NavMenuContext);

	const { userName } = useContext(PersonalNameContext);

	
	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<S.SidebarPersonalName>{userName}</S.SidebarPersonalName>
				<S.SidebarIcon onClick={getNavMenuContext}>
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
