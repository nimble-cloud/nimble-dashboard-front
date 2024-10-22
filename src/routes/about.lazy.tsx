import { createLazyFileRoute } from '@tanstack/react-router'

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"

import OpenIcon from '@mui/icons-material/OpenInNew';

import Section from "../components/About/Section"

import Sawyer from "../assets/sawyer.jpeg"
import Jake from "../assets/jake.jpeg"
import DataVis from "../assets/datavis.png"

const portfolioUrl = "https://portfolio.nimblecloud.app"

export const Route = createLazyFileRoute('/about')({
  component: () => <About />,
})

function Portfolio() {
  return (
    <Grid item sm={12} md={12} sx={{ mt: 2 }}>
      <Paper elevation={3} sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "primary.main",
        p: 1,
        "& img": {
          maxWidth: "100%",
          height: "auto",
        }
      }}>
        <img src={DataVis} />
        <Button variant="text" startIcon={<OpenIcon />} sx={{ ml: 2 }} target="_blank" href={portfolioUrl + "/datavis/"}>
          /datavis
        </Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam error minus cupiditate recusandae id nemo, animi cumque amet nulla, doloremque rerum ab sit deserunt assumenda, tempora atque rem ratione.
        </Typography>
      </Paper>
    </Grid>
  )
}

function About() {
  return (
    <Container>
      <Typography sx={{
        mt: 5, mb: 3, "& a": {
          textDecoration: "none",
          color: "grey",
        }
      }}>
        Sawyer and Jake met at <a target="_blank" href="https://pascohh.com">PASCO Home Health</a>. Sawyer is a full stack software developer. He specializes in making applications that facilitate productivity. Jake is a data engineer who can get insights out of a data set with five thousand records or one billion records. Together they specialize in taking obscure problems companies face and creating easy to use - data focused solutions. <b>Nimble Cloud</b> was created to be an outlet for these skills. We specialize in operational processes driven by data. We understand that problems change quickly so the solution must be nimble.
      </Typography>

      <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
        <Section ownerName="Sawyer O" ownerPic={Sawyer} linkedin="sawyero" github="SawyerOG" />
        <Section ownerName="Jake S" ownerPic={Jake} linkedin="jake-sandelin-165813a3" github="jakeNimble" />
      </Stack>

      <Typography sx={{ mt: 3 }} variant="h5" align="center">Check out some of our work!</Typography>

      <Grid container spacing={2}>
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Portfolio />

      </Grid>
    </Container>
  )
}