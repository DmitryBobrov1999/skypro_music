import { createSlice } from '@reduxjs/toolkit';
import { fetchAddFavoriteTrack } from '../../api/addFavoriteTrackApi';
import { fetchDeleteFavoriteTrack } from '../../api/deleteFavoriteTrackApi';
import { fetchFavoriteTodos } from '../../api/favoriteTodosApi';
import { fetchTodos } from '../../api/todosApi';
import { fetchCategoryTodos } from '../../api/categoryTodosApi';

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todos: [],
		favoriteTodos: [],
		categoryTodos: [],
		categoryTodo: [],
		status: null,
		currentPlayer: null,
		isPlaying: false,
		likedId: false,
		isFavoriteList: null,
		error: null,
		favError: null,
		addError: null,
		delError: null,
		catError: null,
		sortYearNew: false,
		sortYearOld: false,
		sortYearDefault: true,
		todosValue: '',
		categoryValue: '',
		selectedGenre: [],
		selectedArtist: [],
	},
	reducers: {
		setCategoryTodo(state, action) {
			state.categoryTodo = action.payload
		},
		addArtist: (state, action) => {
			state.selectedArtist.push(action.payload);
		},
		removeArtist: (state, action) => {
			state.selectedArtist = state.selectedArtist.filter(
				artist => artist !== action.payload
			);
		},
		addGenre: (state, action) => {
			state.selectedGenre.push(action.payload);
		},
		removeGenre: (state, action) => {
			state.selectedGenre = state.selectedGenre.filter(
				genre => genre !== action.payload
			);
		},

		setCurrentTrack(state, action) {
			state.currentPlayer = action.payload;
		},
		setOneIsFavoriteList(state) {
			state.isFavoriteList = 1;
		},
		setTwoIsFavoriteList(state) {
			state.isFavoriteList = 2;
		},
		setThreeIsFavoriteList(state) {
			state.isFavoriteList = 3
		},
		setIsPlaying(state) {
			state.isPlaying = !state.isPlaying;
		},

		setTodosValue(state, action) {
			state.todosValue = action.payload;
		},

		setCategoryValue(state, action) {
			state.categoryValue = action.payload
		},
		setTodos(state, action) {
			state.todos = action.payload;
		},

		sortStartFromTheNew(state) {
			state.sortYearOld = false;
			state.sortYearNew = true;
			state.sortYearDefault = false;
			if (state.sortYearNew) {
				state.todos.sort((a, b) => (a.release_date > b.release_date ? -1 : 1));
			}
		},
		sortStartFromTheOld(state) {
			state.sortYearNew = false;
			state.sortYearOld = true;
			state.sortYearDefault = false;
			if (state.sortYearOld) {
				state.todos.sort((a, b) => (a.release_date < b.release_date ? -1 : 1));
			}
		},
		sortStartFromDefault(state) {
			state.sortYearNew = false;
			state.sortYearOld = false;
			state.sortYearDefault = true;
		},

		toggleLikedId(state, action) {
			state.likedId = action.payload;

			const trackId = state.likedId;
			const trackIndex = state.todos.findIndex(track => track.id === trackId);
			if (trackIndex !== -1) {
				state.todos[trackIndex].likedId = !state.todos[trackIndex].likedId;
			}
		},

		toggleCategoryLikedId(state, action) {
			state.likedId = action.payload;
			const trackId = state.likedId;
			const trackIndex = state.categoryTodos.findIndex(
				track => track.id === trackId
			);
			if (trackIndex !== -1) {
				state.categoryTodos[trackIndex].likedId =
					!state.categoryTodos[trackIndex].likedId;
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
		builder.addCase(fetchCategoryTodos.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchCategoryTodos.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.categoryTodos = action.payload;
		});
		builder.addCase(fetchCategoryTodos.rejected, (state, action) => {
			state.status = 'rejected';
			state.catError = action.payload;
		});
		builder.addCase(fetchAddFavoriteTrack.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchAddFavoriteTrack.fulfilled, state => {
			state.status = 'resolved';
		});
		builder.addCase(fetchAddFavoriteTrack.rejected, (state, action) => {
			state.status = 'rejected';
			state.addError = action.payload;
		});
		builder.addCase(fetchDeleteFavoriteTrack.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchDeleteFavoriteTrack.fulfilled, state => {
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
	toggleCategoryLikedId,
	toggleFavoriteLikedId,
	setOneIsFavoriteList,
	setTwoIsFavoriteList,
	setThreeIsFavoriteList,
	sortStartFromTheNew,
	sortStartFromTheOld,
	sortStartFromDefault,
	setTodos,
	setTodosValue,
	addGenre,
	removeGenre,
	addArtist,
	removeArtist,
	setCategoryTodo,
	setCategoryValue,
} = todoSlice.actions;

export default todoSlice.reducer;
