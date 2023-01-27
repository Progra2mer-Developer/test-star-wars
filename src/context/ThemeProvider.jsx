import React, { createContext, useContext, useState } from "react";
import { changeCssVariables } from "@services/changeCssVariables";

const ThemeContext = createContext();

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);
  const change = (name) => {
    setTheme(name);
    // changeCssVariables(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, change: change }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
