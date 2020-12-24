import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const a = 1;
const b = a == 1 ? 1 :0;
const xx = 4
console.log(a*b);

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
return <button onClick={toggleTheme}>Toggle the theme {a*b*xx.toString()}</button>;
};

export default ThemeToggle;

