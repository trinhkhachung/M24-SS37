import { useReducer } from "react";

type State = {
  count: number;
};
interface Action {
  type: string;
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "-":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Decrease() {
  const [state, dispatch] = useReducer(reducer, { count: 10 });
  const handleClick = () => {
    dispatch({ type: "-" });
  };
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleClick}></button>
    </>
  );
}
