import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todo.js'
import favoriteTodoReducer from './slice/favoriteTodo'

export const store = configureStore({
	reducer: {
		todos: todoReducer,
		favoriteTodos: favoriteTodoReducer,
	},
})