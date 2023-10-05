import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from './token';

export const fetchFavoriteTodos = createAsyncThunk(
	'fetchFavoriteTodos',
	async (_, { rejectWithValue }) => {
		const tokens = await token();

		const { access: accessToken } = tokens;
		try {
			const response = await fetch(
				'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

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
