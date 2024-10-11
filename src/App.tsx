import Box from "@mui/material/Box";

import Toolbar from "./components/Toolbar";
import nimbleLogo from "./assets/nimble_cloud_logo_original.webp";
import TypeWriter from "./components/TypeWriter";
import ProjectGrid from "./components/ProjectGrid";
import Commendations from "./components/Commendations";

function App() {
  return (
    <>
      <Toolbar />
      <Box sx={{ mt: 15, mb: 10, textAlign: "center" }}>
        <img src={nimbleLogo} alt="Nimble logo" height="300px" />
        <TypeWriter />
      </Box>
      <Commendations />
      <ProjectGrid />
    </>
  );
}

export default App;
