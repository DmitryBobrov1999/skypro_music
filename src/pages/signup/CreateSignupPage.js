import './CreateSignupPage.styles.js';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './CreateSignupPage.styles';

export const CreateSignUpPage = () => {
	return (
		<S.Wrapper>
			<S.ContainerSignup>
				<S.ModalBlock>
					<S.ModalFormLogin>
						<S.ModalLogo>
							<NavLink to='/'>
								<img src='../img/logo_modal.png' alt='logo' />
							</NavLink>
						</S.ModalLogo>

						<S.ModalInputLogin type='text' name='login' placeholder='Почта' />
						<S.ModalInputLogin
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						<S.ModalInputLogin
							type='password'
							name='password'
							placeholder='Повторите пароль'
						/>
						<S.ModalBtnSignupEnt>
							<NavLink to='/'>Зарегистрироваться</NavLink>
						</S.ModalBtnSignupEnt>
					</S.ModalFormLogin>
				</S.ModalBlock>
			</S.ContainerSignup>
		</S.Wrapper>
	);
};