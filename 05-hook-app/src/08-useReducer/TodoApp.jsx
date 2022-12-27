import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
  const initialState = [
    
  ];

  const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
  }
  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
     localStorage.setItem('todos',JSON.stringify(todos) || [])
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  return (
    <>
      <h1>
        TODO APP: 10. <small>Pendientes: 2</small>{" "}
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}></TodoList>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr></hr>
          <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
