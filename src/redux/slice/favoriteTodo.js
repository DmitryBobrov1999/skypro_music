import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
			const todosWithLikedIds = data.map(track => ({
				...track,
				likedId: true,
			}));
			
			return todosWithLikedIds;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const favoriteTodoSlice = createSlice({
	name: 'favoriteTodo',
	initialState: {
		favoriteTodos: [],
		status: null,
		error: null,
		likedId: true,
	},
	reducers: {
		toggleLikedId: (state, action) => {
			state.likedId = action.payload;
			const trackId = state.likedId;
			const trackIndex = state.favoriteTodos.findIndex(
				track => track.id === trackId
			);
			if (trackIndex !== -1) {
				state.favoriteTodos[trackIndex].likedId =
					!state.favoriteTodos[trackIndex].likedId;
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchFavoriteTodos.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchFavoriteTodos.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.favoriteTodos = action.payload;
		});
		builder.addCase(fetchFavoriteTodos.rejected, (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		});
	},
});

export const { setCurrentTrack, setIsPlaying } = favoriteTodoSlice.actions;

export default favoriteTodoSlice.reducer;
