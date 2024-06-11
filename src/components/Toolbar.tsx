import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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

import Markdown from "react-markdown";

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

const AnswerBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "5px",
  padding: 20,
  marginTop: 5,
  marginBottom: 20,
  "& h6": {
    fontWeight: 600,
    color: theme.palette.secondary.main,
    // marginBottom: 0,
    // padding: 0,
  },
}));

const howcan = "How can Nimble Cloud ";
const suggestions = [
  howcan +
    "get my company out of excel into something that encourages collaboration?",
  howcan + "get me clean data and make it easy to access?",
  howcan + "automate our repetitive tasks and save time?",
  howcan + "integrate AI to enhance our decision-making processes?",
  howcan + "streamline our data management with SQL?",
  howcan + "provide real-time analytics and insights?",
  howcan + "reduce our operational costs with modern tools?",
  howcan + "enhance collaboration across our teams?",
  howcan + "implement AI for better inventory management?",
  howcan + "optimize our workflow for better efficiency?",
  howcan + "migrate our legacy systems to the cloud?",
  howcan + "improve our customer relationship management?",
  howcan + "provide scalable solutions for our growing business?",
  howcan + "help us leverage big data for strategic planning?",
  howcan + "ensure our data is always up-to-date and accurate?",
  howcan + "help us implement a data-driven culture?",
  howcan + "facilitate seamless integration with our existing software?",
  howcan + "make our business more agile and responsive?",
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

      if (pos > suggestions.length - 1) {
        pos = 0;
      }
    }, 5000);

    return () => {
      clearInterval(int);
    };
  }, []);

  const [question, setQuestion] = useState("");
  const [asking, setAsking] = useState(false);

  const [list, setList] = useState<React.ReactElement[]>([]);

  const toggleDrawer = () => {
    if (open) return;
    if (!open) {
      setQuestion(placeholder);
    }

    setOpen((p) => !p);
  };

  const ask = async () => {
    setAsking(true);
    const res = await fetch(
      "https://nimblecloud.app/dashai/ask?q=" + question.trim()
    );
    if (res.status === 200) {
      const a = await res.json();

      const c = (
        <AnswerBox key={Math.random().toString()}>
          <Typography variant="h6">{question}</Typography>
          <Markdown>{a}</Markdown>
        </AnswerBox>
      );

      setList((p) => {
        const copy = [...p];
        copy.unshift(c);
        return copy;
      });
      setQuestion("");
    }
    setAsking(false);
  };

  const isPhone = useMediaQuery("(max-width:1024px)");
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
            <Grid
              container
              sx={{
                width: isPhone ? "100vw" : "90vw",
                my: 2,
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={12}
                md={11}
                sx={{ display: "flex", mb: isPhone ? 2 : 0, px: 1 }}
              >
                <IconButton onClick={() => setOpen(false)} size="small">
                  <Close
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
                <TextField
                  type="search"
                  autoComplete="off"
                  fullWidth
                  label="Nimble Chat"
                  multiline={isPhone}
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
                  onClick={() => {
                    if (!question) {
                      setQuestion(placeholder);
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={1} sx={{ px: isPhone ? 2 : 1 }}>
                <Button
                  variant="contained"
                  color="primary"
                  aria-label="directions"
                  onClick={ask}
                  disabled={question === ""}
                  fullWidth
                  sx={{ height: "56px" }}
                >
                  Send <Send />
                </Button>
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  p: 3,
                }}
              >
                {asking && (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                )}
                {list.map((i) => i)}
              </Grid>
            </Grid>
          </Drawer>
        </TB>
      </AppBar>
    </>
  );
}
