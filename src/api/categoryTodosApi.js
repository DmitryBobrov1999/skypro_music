import { createAsyncThunk } from '@reduxjs/toolkit';

export const baseURL = 'https://skypro-music-api.skyeng.tech';

export const fetchCategoryTodos = createAsyncThunk(
	'fetchCategoryTodos',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${baseURL}/catalog/selection/`);

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
