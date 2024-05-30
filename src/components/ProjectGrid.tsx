import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

import Lizard from "../assets/lizard.jpg";
import HundredExample from "../assets/100_example.webp";

export default function ProjectGrid() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        my: 3,
        mx: "auto",
        width: "80%",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Card>
          <CardActionArea sx={{ p: 1 }}>
            <CardMedia
              component="img"
              height="540"
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
    </Grid>
  );
}
