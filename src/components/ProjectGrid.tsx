import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

import Lizard from "../assets/lizard.jpg";

export default function ProjectGrid() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        mt: 3,
        mx: "auto",
        width: "90%",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Card>
          <CardActionArea sx={{ p: 4 }}>
            <CardMedia
              component="img"
              height="400"
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
            <Button size="small" color="primary" variant="contained">
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
            <Button size="small" color="primary" variant="contained">
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
            <Button size="small" color="primary" variant="contained">
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
            <Button size="small" color="primary" variant="contained">
              View Live
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
