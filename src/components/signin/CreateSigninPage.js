import './signin.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CreateSignInPage() {
	return (
		<div className='wrapper'>
			<div className='container-enter'>
				<div className='modal__block'>
					<form className='modal__form-login' action='#'>
						<NavLink to='/'>
							<div className='modal__logo'>
								<img src='../img/logo_modal.png' alt='logo' />
							</div>
						</NavLink>
						<input
							className='modal__input login'
							type='text'
							name='login'
							placeholder='Почта'
						/>
						<input
							className='modal__input password'
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						<button className='modal__btn-enter'>
							<NavLink to='/'>Войти</NavLink>
						</button>
						<button className='modal__btn-signup'>
							<NavLink to='/signup'>Зарегистрироваться</NavLink>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
