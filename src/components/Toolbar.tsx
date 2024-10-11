// import { memo } from "react";
import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import TB from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Chat from "./Chat/Chat";
import { ThemeCtx } from "../theme/context";
import { ThemeSwitch } from "./Switch";

// const Toolbar = memo(() => {
const Toolbar = () => {
  const t = useContext(ThemeCtx);
  return (
    <AppBar position="fixed">
      <TB>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Typography variant="h6" noWrap sx={{ mr: 3 }}>
            About Us
          </Typography>
          <Typography variant="h6" noWrap>
            Contacts
          </Typography>
          <ThemeSwitch value={t.mode === "light"} onChange={t.toggleTheme} />
        </Box>
        <Chat />
      </TB>
    </AppBar>
  );
};

export default Toolbar;
