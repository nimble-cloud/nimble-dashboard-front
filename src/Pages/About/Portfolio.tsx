import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import OpenIcon from "@mui/icons-material/OpenInNew";
import Markdown from "react-markdown";

const portfolioUrl = "https://portfolio.nimblecloud.app";

type Props = {
  img: string;
  url: string;
  urlTitle: string;
  linkDisabled: boolean;
  description: string;
};

export default function Portfolio({
  img,
  url,
  urlTitle,
  linkDisabled,
  description,
}: Props) {
  return (
    <Grid item sm={12} md={12} sx={{ mt: 2 }}>
      <Paper
        elevation={3}
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "primary.main",
          p: 1,
          "& img": {
            maxWidth: "100%",
            height: "auto",
          },
        }}
      >
        <img src={img} />
        <Button
          variant="text"
          startIcon={<OpenIcon />}
          sx={{ ml: 2 }}
          target="_blank"
          href={portfolioUrl + url}
          disabled={linkDisabled}
        >
          {urlTitle}
        </Button>
        <Divider sx={{ my: 2 }} />
        <Markdown>{description}</Markdown>
      </Paper>
    </Grid>
  );
}
