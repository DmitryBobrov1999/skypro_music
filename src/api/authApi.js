export const getAuthUp = async ({ email, password, username }) => {
	await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
		method: 'POST',
		body: JSON.stringify({
			email,
			password,
			username,
		}),
		headers: {
			'content-type': 'application/json',
		},
	}).then(response => response.json());
};

export const getAuth = async ({ email, password }) => {
	await fetch('https://skypro-music-api.skyeng.tech/user/login/', {
		method: 'POST',
		body: JSON.stringify({
			email,
			password,
		}),
		headers: {
			'content-type': 'application/json',
		},
	})
		.then(response => response.json())
		.then(data => {
			if (data.id) {
				localStorage.setItem('user', data.id);
			}
		});
};
