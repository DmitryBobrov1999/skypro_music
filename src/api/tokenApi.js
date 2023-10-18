import { baseURL } from "./todosApi";

export const token = async () => {
	const response = await fetch(`${baseURL}/user/token/`, {
		method: 'POST',
		body: JSON.stringify({
			email: 'bobrovdmitry01@mail.ru',
			password: 'privet123',
		}),
		headers: {
			'content-type': 'application/json',
		},
	});
	const data = await response.json();

	return data;
};
