import React, { createContext, useContext, useState } from "react";

import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@constants/constants";
const ThemeContext = createContext();

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);
  const change = (name) => {
    setTheme(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, change: change }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
