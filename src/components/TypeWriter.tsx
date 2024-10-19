import { memo, useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import "./styles.css";

const sleep = (ms: number) => new Promise((res) => setTimeout(() => res(""), ms))
const words = ["Data", "Software", "Operations", "AI", "Cloud"];

const TypeWriter = memo(() => {
  const [activeText, setActiveText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {

    async function writeWord(word: string) {
      for await (const char of word.split("")) {
        setActiveText((prev) => prev + char);
        await sleep(200)
      }
    }

    async function deleteWord(word: string) {
      const letters = word.split("")
      let count = letters.length - 1;
      letters[count] = ""

      for await (const c of letters) {
        c;

        setActiveText(letters.join(""))
        count--;
        letters[count] = ""

        await sleep(125)
      }
    }

    async function writer() {
      for await (const word of words) {
        await writeWord(word)
        await sleep(2000)
        if (word !== "Cloud") {
          await deleteWord(word)
        }
      }

      setShowCursor(false)
    }

    writer()

  }, []);


  return (
    <>
      <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 600 }}>
        Nimble {activeText}
        {showCursor && <span className="blinking">|</span>}
      </Typography>
      <Fade in={!showCursor}>
        <Typography variant="h6" color="">
          {words.join(" - ")}
        </Typography>
      </Fade>
    </>
  );
});

export default TypeWriter;
