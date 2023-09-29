import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getOneTrackfetchTodos = createAsyncThunk(
	'getOneTrackfetchTodos',
	async (trackId, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/`,
				{
					method: 'GET',
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

const getOneTrackSlice = createSlice({
	name: 'addFavoriteTrack',
	initialState: {
		todos: [],
		status: null,
		error: null,
	},

	extraReducers: builder => {
		builder.addCase(getOneTrackSlice.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(getOneTrackSlice.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.todos = action.payload;
		});
		builder.addCase(getOneTrackSlice.rejected, (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		});
	},
});

export const { setCurrentTrack, setIsPlaying } = getOneTrackSlice.actions;

export default getOneTrackSlice.reducer;
