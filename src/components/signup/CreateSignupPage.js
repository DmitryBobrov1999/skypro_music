import './signup.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CreateSignUpPage() {
	return (
		<div className='wrapper'>
			<div className='container-signup'>
				<div className='modal__block'>
					<form className='modal__form-login'>
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
							className='modal__input password-first'
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						<input
							className='modal__input password-double'
							type='password'
							name='password'
							placeholder='Повторите пароль'
						/>
						<button className='modal__btn-signup-ent'>
							<NavLink to='/'>Зарегистрироваться</NavLink>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}