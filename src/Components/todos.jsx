import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
    const todos = useSelector(state => state.todos);
    console.log(todos)
    const dispatch = useDispatch()
    return (
        <>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>{todo.text} <button onClick={() => dispatch(removeTodo(todo.id))}>X</button></li>
                })}
            </ul>
        </>
    )
}