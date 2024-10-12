import { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  PaletteOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { ThemeCtx } from "./context";

const darkPalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "#2a303c",
    paper: "#1c212b",
  },
  primary: {
    main: "#349486",
  },
  secondary: {
    main: "#e9c694",
  },
  info: {
    main: "#1b181c",
  },
};

const lightPalette: PaletteOptions = {
  mode: "light",
  background: {
    paper: "#F6F7F8",
  },
  primary: {
    main: "#349486",
  },
  secondary: {
    main: "#e9c694",
  },
  info: {
    main: "#1b181c",
  },
};

export default function ThemeCtxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    if (mode === "dark") {
      return createTheme({
        palette: darkPalette,
        typography: {
          fontFamily: "Montserrat",
        },
      });
    } else {
      return createTheme({
        palette: lightPalette,
        typography: {
          fontFamily: "Montserrat",
        },
      });
    }
  }, [mode]);

  return (
    <ThemeCtx.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeCtx.Provider>
  );
}
