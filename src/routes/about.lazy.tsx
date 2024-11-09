import { createLazyFileRoute } from "@tanstack/react-router";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import Section from "../Pages/About/Section";

import Portfolio from "../Pages/About/Portfolio";

import Sawyer from "../assets/sawyer.jpeg";
import Jake from "../assets/jake.jpeg";
import DataVis from "../assets/datavis.png";
import Recall from "../assets/recall.webp";

export const Route = createLazyFileRoute("/about")({
  component: () => <About />,
});

function About() {
  return (
    <Container>
      <Typography
        sx={{
          mt: 5,
          mb: 3,
          "& a": {
            textDecoration: "none",
            color: "grey",
          },
        }}
      >
        Sawyer and Jake met at{" "}
        <a target="_blank" href="https://pascohh.com">
          PASCO Home Health
        </a>
        . Sawyer is a full stack software developer. He specializes in making
        applications that facilitate productivity. Jake is a data engineer who
        can get insights out of a data set with five thousand records or one
        billion records. Together they specialize in taking obscure problems
        companies face and creating easy to use - data focused solutions.{" "}
        <b>Nimble Cloud</b> was created to be an outlet for these skills. We
        specialize in operational processes driven by data. We understand that
        problems change quickly so the solution must be nimble.
      </Typography>

      <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
        <Section
          ownerName="Sawyer O"
          ownerPic={Sawyer}
          ownerTitle="Software Engineer"
          linkedin="sawyero"
          github="SawyerOG"
        />
        <Section
          ownerName="Jake S"
          ownerPic={Jake}
          ownerTitle="Data Engineer"
          linkedin="jake-sandelin-165813a3"
          github="jakeNimble"
        />
      </Stack>

      <Typography sx={{ mt: 3 }} variant="h5" align="center">
        Check out some of our work!
      </Typography>

      <Grid container spacing={2}>
        <Portfolio
          img={DataVis}
          url="/datavis/"
          urlTitle="/datavis"
          linkDisabled={false}
          description={dataVisDesc}
        />
        <Portfolio
          img={Recall}
          url="/pending-sale"
          urlTitle="/recall"
          linkDisabled={true}
          description={recallDesc}
        />
      </Grid>
    </Container>
  );
}

const dataVisDesc = `
#### Data Vis
_Problem:_ \n
The client had years of revenue data in excel. They wanted to start analyzing the data for marketing purposes. They attempted to email these excel reports back and forth to gain insights from them.\n
_Solution:_ \n
A simple, easy to access web application hosted in the cloud so that client and data engineer could easily share data. The client now has the ability to directly load excel reports through the app and the data pipes into Postgres. This provides a far superior experience for both the client and the developer for sharing data. New data is reflected in existing reports instantly and creating new reports can be done simply by building a new Postgres function. An added bonus was adding some graphs for a quick insight into revenue over time.`;

const recallDesc = `
#### Recall
##### _This application is pending sale so it will not be publicly accessible. I would be very happy to show you it if you are interested, however. Sawyer._

Restaurants generally do not support the equipment they use to operate drive through lanes. Most of the equipment comes from a few manufacturing companies (like 3M and HME) who do not provide the best support experience for their equipment. This poor support provides an opportunity for resell companies to exist because they can provide equipment sales, installation, and a more effective support product.

_Goal:_\n
Convert five years of recorded phone calls (~15,500 phone calls) and create an AI Support Agent to help employees who are not experts.

_Steps to Success:_\n
  - Extracting calls from phone company\n
    This seems like it would be straight forward but the phone company did not provide any export or API. Through thier web application, one could download individual calls, however. _Web Scraping FTW_. We were able scrape all the calls from the platform in a matter of hours when the client had originally estimated weeks of time to download these records.
  - Filtering out irrelevant calls\n
    Several LLM agents were used to get to the final product
    - Whisper
      - All calls needed to be transcribed. We used Hugging Face's Inference Enpoints for a dedicated Whisper Server. We were able to convert ~275 phone calls per hour with one GPU.
    - Llama 3.1
      - Relevance Agent
        - Not all phone calls are useful or equally useful. Large Language Models are excellent at extracting semantic meaning from language. It truly is incredible. We used Llama 3.1 via [Groq](https://console.groq.com/docs/quickstart) before generating a troubleshooting or instructional document to do a few relevance checks like:
          - Is the conversation about troubleshooting drive through equipment?
          - Is the problem solved?
          - Is the solution to send new equipment or a technician?
          - What equipment is involved?
        - These data points are used to determine if the conversation should be passed to the next agent to convert the document to a usable troubleshooting guide.
  - Generating a database of support documents for a RAG pipeline.
    - Generate possible phrases one may search for to find an answer to their current problem.
    - Generate vector embedding on those phrases and equipment.

From here it's straight forward! When a user is faced with a problem, describe the problem concisely. "How do I pair a <brand> headset?". Compare this language to our database of equipment and problems, then use some ranking algorithms to find the most relevant documents and pass that back to another LLM Agent prompted to create a single supporting document from the content of the individual retrieved documents against the user's question. Send back that summary and all the supporting documents so the user has at least five historical records of successfully troubleshooting the same issue.`;
