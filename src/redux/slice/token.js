export const token = async () => {
	const response = await fetch(
		'https://skypro-music-api.skyeng.tech/user/token/',
		{
			method: 'POST',
			body: JSON.stringify({
				email: 'bobrovdmitry01@mail.ru',
				password: 'privet123',
			}),
			headers: {
				'content-type': 'application/json',
			},
		}
	);
	const data = await response.json();

	return data;
};
