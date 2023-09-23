import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as S from './AuthPage.styles';
import { useEffect, useState } from 'react';
import { getAuthUp, getAuth } from '../../api/authApi';

export const AuthPage = ({ isLoginMode }) => {
	const [error, setError] = useState(null);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	

	const handleLogin = async () => {
		if (!email || !password) {
			setError('Укажите почту/пароль');
			return;
		}
		setIsLoading(true);

		const { status } = await getAuth({
			email: email,
			password: password,
		});
		setIsLoading(false);

		if (status === 200) {
			navigate('/');
		} else if (status === 401) {
			setError('Пользователь с таким email или паролем не найден');
		}
	};


	const handleRegister = async () => {
		if (!email || !password || !repeatPassword) {
			setError('Укажите почту/пароль');
			return;
		}

		if(password !== repeatPassword) {
			setError('Пароли не совпадают');
			return
		}
		setIsLoading(true);

		const { status } = await getAuthUp({
			email: email,
			password: password,
			username: email,
			repeatPassword: repeatPassword,
		});
		setIsLoading(false);

		if (status === 201) {
			navigate('/');
		} else if (status === 400) {
			setError('Пользователь с таким именем уже существует');
		}
	};


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
							<S.PrimaryButton
								disabled={isLoading}
								onClick={() => handleLogin({ email, password })}
							>
								{isLoading ? 'Войти' : 'Войти'}
							</S.PrimaryButton>

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
								<S.PrimaryButton
									disabled={isLoading}
									onClick={() =>
										handleRegister({ email, password, repeatPassword })
									}
								>
									{isLoading ? 'Зарегистрироваться' : 'Зарегистрироваться'}
								</S.PrimaryButton>
							</NavLink>
						</S.Buttons>
					</>
				)}
			</S.ModalForm>
		</S.PageContainer>
	);
};
