import { useReducer, useState, useEffect } from "react";

interface Todo {
  id: number;
  name: string;
}
interface State {
  todos: Todo[];
}
interface Action {
  type: string;
  payload?: any;
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADDTODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETETODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default function Todolist() {
  const [state, dispatch] = useReducer(reducer, {
    todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  });
  const [newTodo, setNewTodo] = useState<string>("");
  const addToDo = () => {
    if (newTodo !== "") {
      const todo: Todo = {
        id: Math.floor(Math.random() * 1000000),
        name: newTodo,
      };
      dispatch({ type: "ADDTODO", payload: todo });
      setNewTodo("");
      return;
    } else {
      alert("Không được để trống");
    }
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETETODO", payload: id });
  };

  useEffect(() => {
    if (state.todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    } else {
      localStorage.removeItem("todos");
    }
  }, [state.todos]);

  return (
    <>
      <span>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nhập tên công việc"
          type="text"
        />
        <button onClick={addToDo}>Thêm mới</button>
      </span>
      {state.todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid black",
            width: "280px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{todo.name}</p>
          <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
        </div>
      ))}
    </>
  );
}
