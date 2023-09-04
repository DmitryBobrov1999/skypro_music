import './CreateSigninPage.styles.js';
import { NavLink } from 'react-router-dom';
import * as S from './CreateSigninPage.styles';
import React from 'react';
export default function CreateSignInPage() {
	const sendTrueToLocalStorage = () => {
		window.localStorage.setItem('user', true);
	};

	return (
		<S.Wrapper>
			<S.ContainerEnter>
				<S.ModalBlock>
					<S.ModalFormLogin action='#'>
						<S.ModalLogo>
							<NavLink to='/'>
								<img src='../img/logo_modal.png' alt='logo' />
							</NavLink>
						</S.ModalLogo>

						<S.ModalInputLogin type='text' name='login' placeholder='Почта' />
						<S.ModalInputPassword
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						<S.ModalBtnEnter onClick={sendTrueToLocalStorage}>
							<NavLink to='/'>Войти</NavLink>
						</S.ModalBtnEnter>
						<S.ModalBtnSignup>
							<NavLink to='/register'>Зарегистрироваться</NavLink>
						</S.ModalBtnSignup>
					</S.ModalFormLogin>
				</S.ModalBlock>
			</S.ContainerEnter>
		</S.Wrapper>
	);
}
