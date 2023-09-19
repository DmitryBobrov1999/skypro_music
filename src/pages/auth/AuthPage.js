import { Link, NavLink } from 'react-router-dom';
import * as S from './AuthPage.styles';
import { useEffect, useState } from 'react';
import { getAuthUp, getAuth } from '../../api/authApi';

export const AuthPage = ({ isLoginMode }) => {
	const [error, setError] = useState(null);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const userInfo = localStorage.getItem('user');

	const handleLogin = async () => {
		getAuth({
			email: email,
			password: password,
		});
	};

	const handleRegister = async () => {
		getAuthUp({
			email: email,
			password: password,
			username: email,
		});
	};

	// localStorage.clear()

	useEffect(() => {
		setError(null);
	}, [isLoginMode, email, password, repeatPassword]);

	return (
		<S.PageContainer>
			<S.ModalForm>
				<Link to='/login'>
					<S.ModalLogo>
						<S.ModalLogoImage src='/img/logo_modal.png' alt='logo' />
					</S.ModalLogo>
				</Link>
				{isLoginMode ? (
					<>
						<S.Inputs>
							<S.ModalInput
								type='text'
								name='login'
								placeholder='Почта'
								value={email}
								onChange={event => {
									setEmail(event.target.value);
								}}
							/>
							<S.ModalInput
								type='password'
								name='password'
								placeholder='Пароль'
								value={password}
								onChange={event => {
									setPassword(event.target.value);
								}}
							/>
						</S.Inputs>
						{error && <S.Error>{error}</S.Error>}
						<S.Buttons>
							<NavLink to='/'>
								<S.PrimaryButton
									onClick={() => handleLogin({ email, password })}
								>
									Войти
								</S.PrimaryButton>
							</NavLink>

							<Link to='/register'>
								<S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
							</Link>
						</S.Buttons>
					</>
				) : (
					<>
						<S.Inputs>
							<S.ModalInput
								type='text'
								name='login'
								placeholder='Почта'
								value={email}
								onChange={event => {
									setEmail(event.target.value);
								}}
							/>
							<S.ModalInput
								type='password'
								name='password'
								placeholder='Пароль'
								value={password}
								onChange={event => {
									setPassword(event.target.value);
								}}
							/>
							<S.ModalInput
								type='password'
								name='repeat-password'
								placeholder='Повторите пароль'
								value={repeatPassword}
								onChange={event => {
									setRepeatPassword(event.target.value);
								}}
							/>
						</S.Inputs>
						{error && <S.Error>{error}</S.Error>}
						<S.Buttons>
							<NavLink>
								<S.PrimaryButton onClick={handleRegister}>
									Зарегистрироваться
								</S.PrimaryButton>
							</NavLink>
						</S.Buttons>
					</>
				)}
			</S.ModalForm>
		</S.PageContainer>
	);
};
