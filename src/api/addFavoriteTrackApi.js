import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFavoriteTodos } from './favoriteTodosApi';
import { token } from './tokenApi';
import { baseURL } from './todosApi';

export const fetchAddFavoriteTrack = createAsyncThunk(
	'fetchAddFavoriteTrack',
	async (trackId, { rejectWithValue, dispatch }) => {
		const tokens = await token();

		const { access: accessToken } = tokens;
		try {
			const response = await fetch(
				`${baseURL}/catalog/track/${trackId}/favorite/`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'content-type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error(response.status);
			}
			dispatch(fetchFavoriteTodos());
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
