import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteTodos } from './favoriteTodo';
import { setTrackId } from './todo';
import { token } from './token';

export const fetchDeleteFavoriteTrack = createAsyncThunk(
	'fetchDeleteFavoriteTrack',
	async (trackId, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(
				`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`,
				{
					method: 'Delete',
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

const deleteFavoriteTrackSlice = createSlice({
	name: 'addFavoriteTrack',
	initialState: {
		favoriteTodos: [],
		status: null,
		error: null,
	},

	extraReducers: builder => {
		builder.addCase(deleteFavoriteTrackSlice.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(deleteFavoriteTrackSlice.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.favoriteTodos = action.payload;
		});
		builder.addCase(deleteFavoriteTrackSlice.rejected, (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		});
	},
});

export const { setCurrentTrack, setIsPlaying } =
	deleteFavoriteTrackSlice.actions;

export default deleteFavoriteTrackSlice.reducer;
