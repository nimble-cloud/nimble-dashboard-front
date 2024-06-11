import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import "./styles.css";

const words = ["Data", "Software", "Operations", "Cloud"];

export default function TypeWriter() {
  const [activeText, setActiveText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let int = 0; // Changed variable declaration for consistency
    let pos = 0; // Initialize position

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    // function to handle the text animation
    async function animateText() {
      // clear the active text initially
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
      }, 300);
    }

    animateText();
    setTimeout(() => {
      // start the interval to animate the text every 2 seconds
      int = setInterval(animateText, 3000);
    }, 500);
  }, []);

  return (
    <>
      <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 600 }}>
        Nimble {activeText}
        {showCursor && <span className="blinking">|</span>}
      </Typography>
      <Fade in={!showCursor}>
        <Typography variant="h6" color="info.main">
          Data - Software - Operations
        </Typography>
      </Fade>
    </>
  );
}
