import React from 'react';
import { SidebarSkeleton } from '../SkeletonCard.js';
import * as S from './Sidebar.styles';

export default function CreateSidebar({ isLoading }) {
	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
				<S.SidebarIcon>
					<svg alt='logout'>
						<use xlinkHref='img/icon/sprite.svg#logout' />
					</svg>
				</S.SidebarIcon>
			</S.SidebarPersonal>
			<S.SidebarBlock>
				<S.SidebarList>
					<S.SidebarItem>
						<S.SidebarLink href='#'>
							{isLoading ? (
								<S.SidebarImg src='img/playlist01.png' alt="day's playlist" />
							) : (
								<SidebarSkeleton />
							)}
						</S.SidebarLink>
					</S.SidebarItem>
					<S.SidebarItem className='sidebar__item'>
						<S.SidebarLink href='#'>
							{isLoading ? (
								<S.SidebarImg src='img/playlist02.png' alt="day's playlist" />
							) : (
								<SidebarSkeleton />
							)}
						</S.SidebarLink>
					</S.SidebarItem>
					<S.SidebarItem className='sidebar__item'>
						<S.SidebarLink href='#'>
							{isLoading ? (
								<S.SidebarImg src='img/playlist03.png' alt="day's playlist" />
							) : (
								<SidebarSkeleton />
							)}
						</S.SidebarLink>
					</S.SidebarItem>
				</S.SidebarList>
			</S.SidebarBlock>
		</S.MainSidebar>
	);
}
