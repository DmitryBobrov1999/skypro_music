import './CreateSigninPage.styles.js';
import { NavLink } from 'react-router-dom';
import * as S from './CreateSigninPage.styles';

export default function CreateSignInPage() {
	

	const sendTrueToLocalStorage = () => {
		window.localStorage.setItem('user', true);
	};

	

	return (
		<S.Wrapper>
			<S.ContainerEnter>
				<S.ModalBlock>
					<S.ModalFormLogin action='#'>
						<NavLink to='/'>
							<S.ModalLogo>
								<img src='../img/logo_modal.png' alt='logo' />
							</S.ModalLogo>
						</NavLink>
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
