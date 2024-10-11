import { memo, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import "./styles.css";

const words = ["Data", "Software", "Operations", "AI", "Cloud"];

const TypeWriter = memo(() => {
  const [activeText, setActiveText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let int = 0;
    let pos = 0;

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    async function animateText() {
      setActiveText("");

      setTimeout(async () => {
        // loop through each character in the current word
        for (const char of words[pos].split("")) {
          setActiveText((prev) => prev + char);
          await delay(100);
        }

        // move to the next word or stop if its the last word
        if (pos === words.length - 1) {
          clearInterval(int);

          setTimeout(() => {
            setShowCursor(false);
          }, 1000);
        } else {
          pos++;
        }
      }, 400);
    }

    animateText();
    setTimeout(() => {
      int = setInterval(animateText, 2000);
    }, 500);
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
