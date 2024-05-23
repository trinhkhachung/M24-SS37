import { useContext } from "react";
import ThemeContext from "./components/ThemeContext";
import Button from "./components/Button";
import Increase from "./components/Increase";
import Decrease from "./components/Decrease";
import Inputchange from "./components/Inputchange";
import ShowGender from "./components/ShowGender";
import Todolist from "./components/Todolist";

export default function App() {
  const theme: string | null = useContext(ThemeContext);
  return (
    <>
      <h1>Bài 1-2-3-4</h1>
      <ThemeContext.Provider value={"blue"}>
        <Button />
      </ThemeContext.Provider>
      <h1>Bài 5</h1>
      <Increase />
      <h1>Bài 6</h1>
      <Decrease />
      <h1>Bài 7</h1>
      <Inputchange />
      <h1>Bài 8</h1>
      <ShowGender />
      <h1>Bài 9</h1>
      {/* <Todolist/> */}
    </>
  );
}
