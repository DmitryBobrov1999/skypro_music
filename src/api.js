export const getTracks = async () => {
	const response = await fetch('https://painassasin.online/catalog/track/all/');

	if (!response.ok) {
		throw new Error('Не удалось загрузить плейлист, попробуйте позже');
	}

	const data = await response.json();
	return data;
};
