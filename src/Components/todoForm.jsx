import { useState } from "react"
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo("")
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} name="" placeholder="Add Todo" id="" />
                <button type="submit">Add</button>
            </form>
        </>
    )
}