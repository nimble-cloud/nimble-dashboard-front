import Box from "@mui/material/Box";

import nimbleLogo from "../assets/nimble_cloud_logo_original.webp";
import TypeWriter from "../components/TypeWriter";
// import ProjectGrid from "../components/ProjectGrid";
import Commendations from "../components/Commendations";

import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <Box sx={{ mt: 5, mb: 10, textAlign: "center" }}>
                <img src={nimbleLogo} alt="Nimble logo" height="300px" />
                <TypeWriter />
            </Box>

            <Commendations />

            {/* <ProjectGrid /> */}
        </>
    )
}