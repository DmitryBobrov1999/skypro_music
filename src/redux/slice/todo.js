import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddFavoriteTrack } from './addFavoriteTrack';
import { fetchDeleteFavoriteTrack } from './deleteFavoriteTrack';

import { fetchFavoriteTodos } from './favoriteTodo';

export const fetchTodos = createAsyncThunk(
	'fetchTodos',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'https://skypro-music-api.skyeng.tech/catalog/track/all/'
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

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todos: [],
		favoriteTodos: [],
		status: null,

		currentPlayer: null,
		isPlaying: false,
		likedId: false,
		isFavoriteList: null,
		error: null,
		favError: null,
		addError: null,
		delError: null,
	},
	reducers: {
		setCurrentTrack(state, action) {
			state.currentPlayer = action.payload;
		},
		setTrueIsFavoriteList(state) {
			state.isFavoriteList = true;
		},
		setFalseIsFavoriteList(state) {
			state.isFavoriteList = false;
		},
		setIsPlaying(state) {
			state.isPlaying = !state.isPlaying;
		},
		toggleLikedId(state, action) {
			state.likedId = action.payload;
			const trackId = state.likedId;
			const trackIndex = state.todos.findIndex(track => track.id === trackId);
			if (trackIndex !== -1) {
				state.todos[trackIndex].likedId = !state.todos[trackIndex].likedId;
			}
		},
		toggleFavoriteLikedId(state, action) {
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
		builder.addCase(fetchTodos.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.todos = action.payload;
		});
		builder.addCase(fetchTodos.rejected, (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		});
		builder.addCase(fetchFavoriteTodos.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchFavoriteTodos.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.favoriteTodos = action.payload;
		});
		builder.addCase(fetchFavoriteTodos.rejected, (state, action) => {
			state.status = 'rejected';
			state.favError = action.payload;
		});
		builder.addCase(fetchAddFavoriteTrack.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchAddFavoriteTrack.fulfilled, (state, action) => {
			state.status = 'resolved';
		});
		builder.addCase(fetchAddFavoriteTrack.rejected, (state, action) => {
			state.status = 'rejected';
			state.addError = action.payload;
		});
		builder.addCase(fetchDeleteFavoriteTrack.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchDeleteFavoriteTrack.fulfilled, (state, action) => {
			state.status = 'resolved';
		});
		builder.addCase(fetchDeleteFavoriteTrack.rejected, (state, action) => {
			state.status = 'rejected';
			state.delError = action.payload;
		});
	},
});

export const {
	setCurrentTrack,
	setIsPlaying,
	toggleLikedId,
	toggleFavoriteLikedId,
	setTrueIsFavoriteList,
	setFalseIsFavoriteList,
} = todoSlice.actions;

export default todoSlice.reducer;
