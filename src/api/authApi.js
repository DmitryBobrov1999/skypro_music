export const getAuthUp = async ({
	email,
	password,
	username,
	setError,
	repeatPassword,
}) => {
	const response = await fetch(
		'https://skypro-music-api.skyeng.tech/user/signup/',
		{
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				username,
				repeatPassword,
			}),
			headers: {
				'content-type': 'application/json',
			},
		}
	);
	await response.json().then(data => {
		if (data.id) {
			localStorage.setItem('user', data.email);
		}
	});
	if (!email || !password || !repeatPassword) {
		setError('Пожалуйста, заполните все поля');
		return;
	}
};

export const getAuth = async ({ email, password, setError }) => {
	const response = await fetch(
		'https://skypro-music-api.skyeng.tech/user/login/',
		{
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'content-type': 'application/json',
			},
		}
	);
	await response.json().then(data => {
		if (data.id) {
			localStorage.setItem('user', data.email);
		}
	});
	if (response.status === 400) {
		setError('Пожалуйста, заполните все поля');
	}

	if (response.status === 401) {

		setError('Пользователь с таким email или паролем не найден');
	}
};
