import React, { MouseEventHandler, useContext, useState } from "react";
import App from "../App";
import ThemeContext from "./ThemeContext";

export default function Button() {
  const theme = useContext(ThemeContext) as string;
  const [button, setButton] = useState<boolean>(false);
  const handleClick = () => {
    setButton(!button);
  };
  return (
    <>
      {button ? (
        <div>
          <h2>Nền xanh</h2>
          <button
            name="button"
            style={{ padding: "5px", background: theme, border: "none" }}
            onClick={handleClick}
          >
            Click me
          </button>
        </div>
      ) : (
        <div>
          <h2>Nền đỏ</h2>
          <button
            name="button"
            style={{ padding: "5px", background: "red", border: "none" }}
            onClick={handleClick}
          >
            Click me
          </button>
        </div>
      )}
    </>
  );
}
