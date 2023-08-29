import React from 'react';
import * as S from '../home/sidebar/Sidebar.styles';

export default function ErrorSidebar() {
	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
				<S.SidebarIcon>
					<svg alt='logout'>
						<use xlinkHref='/img/icon/sprite.svg#logout' />
					</svg>
				</S.SidebarIcon>
			</S.SidebarPersonal>
		</S.MainSidebar>
	);
}
