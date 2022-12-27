import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [] }) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem key={todo.key} todo={todo}></TodoItem>

                ))

            }

        </ul>
    )
}


