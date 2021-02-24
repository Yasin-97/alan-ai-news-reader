import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

import NewsCards from "./component/newsCards/NewsCards";
import useStyles from "./styles.js";
import alanLogo from '../src/img/alan-logo.png'
import { Typography } from "@material-ui/core";


const alanKey =
  "864d0641ccb8a0ec28bc6dd48ef0fabc2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      // this key allow us to use Alan
      key: alanKey,
      // to connect react to Alan studio
      onCommand: ({ command, articles, number }) => {
        if (command === "NewHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          // to change word numbers to integer (numbers with length of more than 2 ==> 20, 19...)
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
    setTimeout(() => {
      alert("Please make sure your microphone is enabled.")
    }, 3000);
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes.logoContainer}>
        <img
          src={alanLogo}
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Typography component="strong" style={{ color: '#c1c1c1', padding:"20px 0" }}>Created with <span style={{color:"#854836"}}>coffee</span> and <span style={{color:"#c00000"}}>love</span>  by <span style={{color:"#fff"}}>Yasin Zahiri</span></Typography>
      {/* <strong style={{ color: '#dfdfdf', padding:"20px 0" }}></strong> */}
    </div>
  );
}

export default App;
