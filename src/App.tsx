import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Toolbar from "./components/Toolbar";
import nimbleLogo from "./assets/nimble_cloud_logo_original.webp";
import TypeWriter from "./components/TypeWriter/TypeWriter";

function App() {
  return (
    <>
      <Toolbar />
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "center",
            height: "91.5vh",
          }}
        >
          <Box sx={{ mt: 5 }}>
            <img src={nimbleLogo} alt="Nimble logo" height="300px" />
            <TypeWriter />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Typography variant="body1">Who am i</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
