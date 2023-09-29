import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteTodos } from './favoriteTodo';
import { setTrackId } from './todo';
import { token } from './token';

export const fetchAddFavoriteTrack = createAsyncThunk(
	'fetchAddFavoriteTrack',
	async (trackId, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(
				`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${token}`,
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

const addFavoriteTrackSlice = createSlice({
	name: 'addFavoriteTrack',
	initialState: {
		favoriteTodos: [],
		status: null,
		error: null,
	},

	extraReducers: builder => {
		builder.addCase(addFavoriteTrackSlice.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(addFavoriteTrackSlice.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.favoriteTodos = action.payload;
		});
		builder.addCase(addFavoriteTrackSlice.rejected, (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		});
	},
});

export const { setCurrentTrack, setIsPlaying } = addFavoriteTrackSlice.actions;

export default addFavoriteTrackSlice.reducer;
