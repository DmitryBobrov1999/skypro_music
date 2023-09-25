import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
		status: null,
		error: null,
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
	},
});

export default todoSlice.reducer;
