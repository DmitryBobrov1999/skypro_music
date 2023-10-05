import React, { useContext } from 'react';
import { SidebarSkeleton } from '../SkeletonCard.js';
import * as S from './Sidebar.styles';
import { NavLink } from 'react-router-dom';

import { PersonalNameContext } from '../../routes.jsx'; 
import { NavMenuContext } from '../../routes.jsx';

export const CreateSidebar = ({ isLoading, categoryTodos }) => {
	const { userName } = useContext(PersonalNameContext);

	const getNavMenuContext = useContext(NavMenuContext);


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
			<S.SidebarBlock>
				<S.SidebarList>
					{categoryTodos.map(categoryTodo => (
						<S.SidebarItem key={categoryTodo.id}>
							<S.SidebarLink>
								{isLoading ? (
									<NavLink to={`/category/${categoryTodo.id}`}>
										<S.SidebarImg src={`img/playlist${categoryTodo.id}.png`} />
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
