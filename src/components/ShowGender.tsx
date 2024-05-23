import React, { useReducer } from "react";

interface State {
  gender: string;
}

interface Action {
  type: string;
  payload?: string;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SELECT_GENDER":
      return { ...state, gender: action.payload || "" };
    default:
      return state;
  }
};

export default function ShowGender() {
  const [state, dispatch] = useReducer(reducer, { gender: "" });

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SELECT_GENDER", payload: e.target.value });
  };

  return (
    <>
      <input
        onChange={handleGenderChange}
        name="gender"
        value={"Nam"}
        type="radio"
        checked={state.gender === "Nam"}
      />{" "}
      Nam
      <input
        name="gender"
        onChange={handleGenderChange}
        value={"Nữ"}
        type="radio"
        checked={state.gender === "Nữ"}
      />{" "}
      Nữ
      <input
        name="gender"
        onChange={handleGenderChange}
        value={"Khác"}
        type="radio"
        checked={state.gender === "Khác"}
      />{" "}
      Khác
      <p>selected gender: {state.gender}</p>
    </>
  );
}
