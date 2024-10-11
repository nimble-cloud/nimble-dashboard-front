import React, {
  memo,
  useReducer,
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ChatIcon from "@mui/icons-material/Chat";

import { Search, StyledInputBase, SearchIconWrapper } from "./ChatComponents";
import CenteredProgress from "../CenteredProgress";
const DrawerContent = lazy(() => import("./DrawerContent"));

const howcan = "How can Nimble Cloud ";
const suggestions = [
  "get my company out of excel into something that encourages collaboration?",
  "get me clean data and make it easy to access?",
  "automate our repetitive tasks and save time?",
  "integrate AI to enhance our decision-making processes?",
  "streamline our data management with SQL?",
  "provide real-time analytics and insights?",
  "reduce our operational costs with modern tools?",
  "enhance collaboration across our teams?",
  "implement AI for better inventory management?",
  "optimize our workflow for better efficiency?",
  "migrate our legacy systems to the cloud?",
  "improve our customer relationship management?",
  "provide scalable solutions for our growing business?",
  "help us leverage big data for strategic planning?",
  "ensure our data is always up-to-date and accurate?",
  "help us implement a data-driven culture?",
  "facilitate seamless integration with our existing software?",
  "make our business more agile and responsive?",
];

let int: number = 0;
const handleToggleDrawer = (state: boolean) => !state;
const handleQuestionList = (
  state: React.ReactElement[],
  newQuestion: React.ReactElement
) => {
  const copy = [...state];
  copy.unshift(newQuestion);
  return copy;
};
const Chat = memo(() => {
  const [open, toggleDrawer] = useReducer(handleToggleDrawer, false);
  const [placeholder, setPlaceHolder] = useState(0);
  const [list, dispatchList] = useReducer(handleQuestionList, []);

  useEffect(() => {
    if (int) {
      clearInterval(int);
    }

    let pos = 1;
    int = setInterval(() => {
      setPlaceHolder(pos);
      pos++;

      if (pos > suggestions.length - 1) {
        pos = 0;
      }
    }, 5000);

    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <ChatIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={howcan + suggestions[placeholder]}
          inputProps={{ "aria-label": "nimble bot chat expample" }}
          onClick={toggleDrawer}
        />
      </Search>

      <Drawer anchor="right" open={open}>
        <Suspense
          fallback={
            <Box sx={{ width: "90vw", mt: "20vh" }}>
              <CenteredProgress />
            </Box>
          }
        >
          {open && (
            <DrawerContent
              open={open}
              toggleOpen={toggleDrawer}
              placeholder={placeholder}
              list={list}
              dispatchQuestion={dispatchList}
              howcan={howcan}
              suggestions={suggestions}
            />
          )}
        </Suspense>
      </Drawer>
    </>
  );
});

export default Chat;
