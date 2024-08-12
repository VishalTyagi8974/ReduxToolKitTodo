import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = { id: nanoid(), text: action.payload };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo
            })
        },
    }

})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;