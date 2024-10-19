import { createLazyFileRoute } from '@tanstack/react-router'

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

import Section from "../components/About/Section"

import Sawyer from "../assets/sawyer.jpeg"
import Jake from "../assets/jake.jpeg"

export const Route = createLazyFileRoute('/about')({
  component: () => <About />,
})

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
    </Container>
  )
}