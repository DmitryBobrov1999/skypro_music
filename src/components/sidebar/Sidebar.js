import React, { useContext } from 'react';
import { SidebarSkeleton } from '../SkeletonCard.js';
import * as S from './Sidebar.styles';
import { NavLink } from 'react-router-dom';
import { categoryMock } from '../../pages/category/CategoryMock.js';
import { PersonalNameContext } from '../../routes.jsx';
import { NavMenuContext } from '../../routes.jsx';

export const CreateSidebar = ({ isLoading }) => {
	const getPersonalNameContext = useContext(PersonalNameContext);

	const getNavMenuContext = useContext(NavMenuContext);

	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<S.SidebarPersonalName>{getPersonalNameContext}</S.SidebarPersonalName>

				<S.SidebarIcon onClick={getNavMenuContext}>
					<NavLink to='/login'>
						<svg alt='logout'>
							<use xlinkHref='/img/icon/sprite.svg#logout' />
						</svg>
					</NavLink>
				</S.SidebarIcon>
			</S.SidebarPersonal>
			<S.SidebarBlock>
				<S.SidebarList>
					{categoryMock.map(track => (
						<S.SidebarItem key={track.id}>
							<S.SidebarLink>
								{isLoading ? (
									<NavLink to={`/category/${track.id}`}>
										<S.SidebarImg src={track.img} />
									</NavLink>
								) : (
									<SidebarSkeleton />
								)}
							</S.SidebarLink>
						</S.SidebarItem>
					))}
				</S.SidebarList>
			</S.SidebarBlock>
		</S.MainSidebar>
	);
};
