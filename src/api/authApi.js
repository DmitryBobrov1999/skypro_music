export const getAuthUp = async ({
	email,
	password,
	username,
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
	const data = await response.json();
	const status = response.status;
	if (data.id) {
		localStorage.setItem('user', data.email);
	}
	return { status };
};

export const getAuth = async ({ email, password }) => {
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
	const data = await response.json();
	const status = response.status;
	if (data.id) {
		localStorage.setItem('user', data.email);
	}

	return { status };
};
