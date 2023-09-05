import { CreateNavMenu } from '../../components/navMenu/NavMenu.js';
import * as S from './NotFound.styles';
import { ErrorAudioPlayer } from '../../components/forError/ErrorAudioPlayer';
import { ErrorSidebar } from '../../components/forError/ErrorSidebar';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const NotFound = ({ sendFalseToLocalStorage,
							user,
							sendTrueToLocalStorage}) => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu
						sendFalseToLocalStorage={sendFalseToLocalStorage}
						user={user}
						sendTrueToLocalStorage={sendTrueToLocalStorage}
					/>
					<S.MainCenterBlock>
						<S.CenterblockSearch>
							<S.SearchSvg>
								<use xlinkHref='/img/icon/sprite.svg#icon-search' />
							</S.SearchSvg>
							<S.SearchText type='search' placeholder='Поиск' name='search' />
						</S.CenterblockSearch>

						<S.ErrorBlock>
							<S.ErrorName>404</S.ErrorName>

							<S.ErrorSvgBlock>
								<S.ErrorSvgName>Страница не найдена</S.ErrorSvgName>
								<S.ErrorSvg src='/img/icon/crying.png'></S.ErrorSvg>
							</S.ErrorSvgBlock>

							<S.ErrorWhere>
								Возможно, она была удалена или перенесена на другой адрес
							</S.ErrorWhere>
							<S.ErrorBackToMain>
								<NavLink to='/'>Вернуться на главную</NavLink>
							</S.ErrorBackToMain>
						</S.ErrorBlock>
					</S.MainCenterBlock>
					<ErrorSidebar />
				</S.Main>

				<ErrorAudioPlayer />
			</S.Container>
		</S.Wrapper>
	);
}
