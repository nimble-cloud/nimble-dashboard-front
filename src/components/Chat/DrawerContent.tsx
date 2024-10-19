import { useState, useRef, memo } from "react";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import Close from "@mui/icons-material/Close";
import Send from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import useMediaQuery from "@mui/material/useMediaQuery";

import Markdown from "react-markdown";
import axios from "axios";

import { AnswerBox } from "./ChatComponents";

type Props = {
  open: boolean;
  placeholder: number;
  howcan: string;
  suggestions: string[];
  toggleOpen: React.DispatchWithoutAction;
  dispatchQuestion: React.Dispatch<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.ReactElement<any, string | React.JSXElementConstructor<any>>
  >;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
};

const DrawerContent = memo(
  ({
    // open,
    list,
    howcan,
    suggestions,
    toggleOpen,
    dispatchQuestion,
  }: Props) => {
    const isPhone = useMediaQuery("(max-width:1024px)");

    const [question, setQuestion] = useState("");
    const [asking, setAsking] = useState(false);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const ask = async () => {
      setAsking(true);
      const { status, data } = await axios.post(
        "https://dashboard-api.nimblecloud.app/api/v1/chat",
        {
          question: question.trim(),
        }
      );
      if (status === 200) {
        const c = (
          <AnswerBox key={Math.random().toString()}>
            <Typography variant="h6">{question}</Typography>
            <Markdown>{data}</Markdown>
          </AnswerBox>
        );

        dispatchQuestion(c);
        setQuestion("");
      }
      setAsking(false);
    };

    const toggleDrawer = () => {
      setQuestion("");
      toggleOpen();
    };

    const handleToggleSuggestion = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
      ) {
        return;
      }

      setOpen(false);
    };

    const selectSuggestion = (sIdx: number) => {
      setQuestion(howcan + suggestions[sIdx]);
      setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
      if (event.key === "Tab") {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    }

    return (
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
          <IconButton onClick={toggleDrawer} size="small">
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
            placeholder="Click the chat icon for inspiration or ask a question about Nimble Cloud."
            multiline={isPhone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggleSuggestion}
                  >
                    <ChatIcon sx={{ fill: "#349486" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
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
            Send <Send sx={{ ml: 1, fontSize: 20 }} />
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

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {suggestions.map((_, idx) => (
                      <MenuItem
                        key={suggestions[idx]}
                        onClick={() => selectSuggestion(idx)}
                      >
                        {howcan + suggestions[idx]}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    );
  }
);

export default DrawerContent;
