import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import TB from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import ChatIcon from "@mui/icons-material/Chat";

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
  howcan + "get my company out of excel?",
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

export default function Toolbar() {
  const [placeholder, setPlaceHolder] = useState(suggestions[0]);
  useEffect(() => {
    let pos = 1;
    setInterval(() => {
      setPlaceHolder(suggestions[pos]);
      pos++;

      if (pos > suggestions.length) {
        pos = 0;
      }
    }, 5000);
  }, []);

  return (
    <>
      <AppBar position="static">
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
              <ChatIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={placeholder}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </TB>
      </AppBar>
    </>
  );
}
