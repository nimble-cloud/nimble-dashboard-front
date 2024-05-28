import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import TB from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";

import Chat from "@mui/icons-material/Chat";
import Close from "@mui/icons-material/Close";
import Send from "@mui/icons-material/Send";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "800px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "500px",
    //   },
    // },
  },
}));

const howcan = "How can Nimble Cloud ";
const suggestions = [
  howcan +
    "get my company out of excel into something that encourages collaboration?",
  howcan + "get me clean data and make it easy to access?",
  howcan + "automate our repetitive tasks and save time?",
  howcan + "integrate AI to enhance our decision-making processes?",
  howcan + "improve our data security and compliance?",
  howcan + "streamline our data management with SQL?",
  howcan + "provide real-time analytics and insights?",
  howcan + "reduce our operational costs with modern tools?",
  howcan + "enhance collaboration across our teams?",
  howcan + "implement AI for better inventory management?",
  howcan + "optimize our workflow for better efficiency?",
  howcan + "migrate our legacy systems to the cloud?",
  howcan + "simplify our IT infrastructure?",
  howcan + "improve our customer relationship management?",
  howcan + "provide scalable solutions for our growing business?",
  howcan + "help us leverage big data for strategic planning?",
  howcan + "ensure our data is always up-to-date and accurate?",
  howcan + "make our business more agile and responsive?",
  howcan + "help us implement a data-driven culture?",
  howcan + "facilitate seamless integration with our existing software?",
];

let int: number = 0;
export default function Toolbar() {
  const [open, setOpen] = useState(false);
  const [placeholder, setPlaceHolder] = useState(suggestions[0]);
  useEffect(() => {
    if (int) {
      clearInterval(int);
    }

    let pos = 1;
    int = setInterval(() => {
      setPlaceHolder(suggestions[pos]);
      pos++;

      if (pos > suggestions.length) {
        pos = 0;
      }
    }, 5000);

    return () => {
      clearInterval(int);
    };
  }, []);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [asking, setAsking] = useState(false);

  const toggleDrawer = () => {
    if (open) return;
    if (!open) {
      setQuestion(placeholder);
    }

    setOpen((p) => !p);
  };

  const ask = async () => {
    setAsking(true);
    const res = await fetch("http://localhost:8000/ask?q=" + question.trim());
    if (res.status === 200) {
      const a = await res.text();
      setAnswer(a);
    }
    setAsking(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <TB>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography variant="h6" noWrap sx={{ mr: 3 }}>
              About Us
            </Typography>
            <Typography variant="h6" noWrap>
              Contact
            </Typography>
          </Box>
          <Search>
            <SearchIconWrapper>
              <Chat />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={placeholder}
              inputProps={{ "aria-label": "nimble bot chat expample" }}
              onClick={toggleDrawer}
            />
          </Search>
          <Drawer anchor="right" open={open}>
            <Grid container sx={{ p: 2, width: "90vw" }}>
              <Grid item xs={11} sx={{ display: "flex" }}>
                <TextField
                  type="search"
                  autoComplete="off"
                  fullWidth
                  label="Nimble Chat"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Chat sx={{ fill: "#349486" }} />
                      </InputAdornment>
                    ),
                  }}
                  placeholder={placeholder}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  sx={{ mr: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  aria-label="directions"
                  onClick={ask}
                  disabled={question === ""}
                >
                  <Send sx={{ mr: 2 }} />
                  Send
                </Button>
              </Grid>
              <Grid item xs={1} sx={{ textAlign: "center", pt: 1 }}>
                <IconButton onClick={() => setOpen(false)} size="small">
                  <Close sx={{ fontSize: "30px" }} />
                </IconButton>
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  p: 5,
                  my: 5,
                  border: "1px solid secondary.main",
                  borderRadius: "5px",
                }}
              >
                {asking ? (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                ) : (
                  <Typography
                    variant="body1"
                    color="primary.main"
                    sx={{ fontWeight: 600 }}
                  >
                    {answer}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Drawer>
        </TB>
      </AppBar>
    </>
  );
}
