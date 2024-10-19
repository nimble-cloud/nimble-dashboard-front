import { createContext } from "react";
export const ThemeCtx = createContext({
  mode: "dark",
  toggleTheme: () => {},
});
