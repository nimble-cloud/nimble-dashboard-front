// import { memo } from "react";
import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import TB from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';

import nimbleLogo from "../assets/nimble_cloud_logo_original.webp";
import Chat from "./Chat/Chat";
import { ThemeCtx } from "../theme/context";

import { Link } from "@tanstack/react-router";

// const Toolbar = memo(() => {
const Toolbar = () => {
  const t = useContext(ThemeCtx);
  return (
    <AppBar position="fixed">
      <TB>
        <Box sx={{
          flexGrow: 1, display: { xs: "none", md: "flex" }, "& a": {
            textDecoration: "none",
            color: "unset",
          },
        }}>
          <Link to="/">
            <Avatar alt="Nimble Logo" src={nimbleLogo} sx={{ mr: 3, cursor: "pointer" }} />
          </Link>
          <Link to="/about">
            {({ isActive }) => (
              <Typography variant="h6" color={isActive ? "secondary.main" : "inherit"} noWrap sx={{ mr: 3 }}>
                About Us
              </Typography>
            )}
          </Link>
          <Link to="/hire-sawyer">
            {({ isActive }) => (
              <Typography variant="h6" noWrap color={isActive ? "secondary.main" : "inherit"}>
                Hire Sawyer
              </Typography>
            )}
          </Link>
          <IconButton onClick={t.toggleTheme} sx={{ mt: -0.5, ml: 1 }}>
            {t.mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
        <Chat />
      </TB>
    </AppBar>
  );
};

export default Toolbar;
