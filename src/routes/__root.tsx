import { createRootRoute, Outlet } from '@tanstack/react-router'

import Box from '@mui/material/Box';

import Toolbar from "../components/Toolbar";

export const Route = createRootRoute({
    component: () => (
        <>
            <Toolbar />

            <Box sx={{ mt: "60px", p: 1 }}>
                <Outlet />
            </Box>
        </>
    )
})