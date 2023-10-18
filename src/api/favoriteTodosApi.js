import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from './tokenApi'; 
import { baseURL } from './todosApi';

export const fetchFavoriteTodos = createAsyncThunk(
	'fetchFavoriteTodos',
	async (_, { rejectWithValue }) => {
		const tokens = await token();

		const { access: accessToken } = tokens;
		try {
			const response = await fetch(`${baseURL}/catalog/track/favorite/all/`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (!response.ok) {
				throw new Error(response.status);
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
