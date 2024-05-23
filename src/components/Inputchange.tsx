import { useReducer } from "react";

interface State {
  input: string;
}
interface Action {
  type: string;
  payload?: string;
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, input: action.payload || "" };
    default:
      return state;
  }
};

export default function Inputchange() {
  const [state, dispatch] = useReducer(reducer, { input: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT_CHANGE", payload: e.target.value });
  };
  return (
    <div>
      <h1>{state.input}</h1>
      <input placeholder="Nhập chuỗi" onChange={handleChange} type="text" />
    </div>
  );
}
