import { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";

import Lizard from "../assets/lizard.jpg";
import HundredExample from "../assets/100_example.webp";
import ThriveLogin from "../assets/thrive_login.webp";
import ThriveHome from "../assets/thrive_homepage.webp";

import ProjectStepper, { type ProductDemo } from "./ProjectStepper";
const thriveList: ProductDemo = [
  {
    image: ThriveLogin,
    text: "PASCO is a home health care company located in Lakewood Colorado providing services across the front range to thousands of caregivers. Thrive aims to be a one stop shop for employee information and self service.",
  },
  {
    image: ThriveHome,
    text: "Caregivers can update their personal information which updates all supporting applications via API, get historical pay checks and payroll information, and can submit sick and vacation requests without relying on a support team.",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProjectGrid() {
  const isPhone = useMediaQuery("(max-width:1024px)");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeList, setActiveList] = useState<ProductDemo>([]);
  const openList = (list: ProductDemo) => {
    setActiveList(list);
    handleOpen();
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{
        my: 3,
        mx: "auto",
        width: isPhone ? "100%" : "80%",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Card>
          <CardActionArea sx={{ p: 1 }}>
            <CardMedia
              component="img"
              // height="540"
              image={HundredExample}
              alt="Example Application"
              sx={{
                boxShadow: "0 2px 3px #000000",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Data Intake and Insights
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An accessible application which allows users to upload data via
                excel or csv into a SQL database allowing Nimble Cloud to
                quickly produce insights and visuals on it.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{}}>
            <Button size="small" color="primary" variant="contained" disabled>
              View Live
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea sx={{ p: 1 }} onClick={() => openList(thriveList)}>
            <CardMedia
              component="img"
              height="170"
              image={ThriveLogin}
              alt="thrive login"
              sx={{
                boxShadow: "0 2px 3px #000000",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <CardContent sx={{ height: "130px" }}>
              <Typography gutterBottom variant="h5" component="div">
                PASCO Thrive
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {thriveList[0].text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ p: 1 }}>
            <Button size="small" color="primary" variant="contained" disabled>
              View Live
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea sx={{ p: 1 }}>
            <CardMedia
              component="img"
              height="170"
              image={Lizard}
              alt="green iguana"
              sx={{
                boxShadow: "0 2px 3px #000000",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <CardContent sx={{ height: "130px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ p: 1 }}>
            <Button size="small" color="primary" variant="contained" disabled>
              View Live
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea sx={{ p: 1 }}>
            <CardMedia
              component="img"
              height="170"
              image={Lizard}
              alt="green iguana"
              sx={{
                boxShadow: "0 2px 3px #000000",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <CardContent sx={{ height: "130px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ p: 1 }}>
            <Button size="small" color="primary" variant="contained" disabled>
              View Live
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-demo"
        aria-describedby="product-demo"
      >
        <Box sx={style}>
          <ProjectStepper list={activeList} />
        </Box>
      </Modal>
    </Grid>
  );
}
