import { createContext, useContext } from "react"

const ThemeContext = createContext<string | null>(null);
export default ThemeContext