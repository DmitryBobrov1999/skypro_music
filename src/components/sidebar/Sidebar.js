import React, { createContext } from 'react';
import { SidebarSkeleton } from '../SkeletonCard.js';
import * as S from './Sidebar.styles';
import { NavLink } from 'react-router-dom';
import { categoryMock } from '../../pages/category/CategoryMock.js';

export const PersonalNameContext = createContext(null);

export const CreateSidebarPersonalName = () => {
	const userName = localStorage.getItem('user');
	return (
		<PersonalNameContext.Provider value={userName}>
			<S.SidebarPersonalName>{userName}</S.SidebarPersonalName>
		</PersonalNameContext.Provider>
	);
};

export const CreateSidebar = ({ isLoading, removeUser }) => {
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
