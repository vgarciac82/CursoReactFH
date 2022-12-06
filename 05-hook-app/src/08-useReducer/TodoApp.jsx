import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: "Recolectar la piedra del alma",
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: "Recolectar la piedra del poder",
            done: false
        }

    ]

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }
    return (
        <>
            <h1>TODO APP: 10. <small>Pendientes: 2</small> </h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={initialState}></TodoList>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr></hr>
                    <TodoAdd onNewTodo={todo => handleNewTodo(todo)}></TodoAdd>

                </div>
            </div>

        </>
    )
}
