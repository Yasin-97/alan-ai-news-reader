import React from "react";
import { Grow, Grid, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
 import {theme} from './styles'
import NewsCard from "../newsCard/NewsCard";

import useStyles from "./styles.js";


const creator={
  color: "#222831",
    title: "Creator",
    text: "Tell me about the creator of this app/application?",
}
const infoCards = [
  { color: "#6c5b7b", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#4e3d53",
    title: "News by Categories",
    text: "Give me the latest Technology News",
    info:
      "Business, Entertainment, General, Health, Science, Sports , Technology",
  },
  {
    color: "#351f39",
    title: "News by Terms",
    text: "What's up with PlayStation 5",
    info: "Joe Biden, BitCoin, PlayStation 5,SmartPhones...",
  },
  {
    color: "#2c061f",
    title: "News by Sources",
    text: "Give me the news from CNN",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
  },
];

const NewsCards = ({ articles, activeArticle}) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <ThemeProvider theme={theme}>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >


          <Grid className={classes.creatorInfoCard}>
            <div className={classes.creatorCard}
                style={{ backgroundColor: creator.color }}>
<Typography variant="h5" style={{ color: "#ffffff" }}>{creator.title}</Typography>
<Typography variant="h6"><span style={{ color: "#ffffff" }}>Try saying:</span> <br /><i>{creator.text}</i></Typography>
            </div>
            
            </Grid>


            <Grid
          className={classes.cardsContainer}
          container
          alignItems="stretch"
          spacing={3}
        >

          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              // md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                  <Typography variant="h5"  style={{ color: "#ffffff" }}>{infoCard.title}</Typography>
                  {infoCard.info? <Typography variant="h6">
                      <strong  style={{ color: "#ffffff" }}>
                          {infoCard.title.split(' ')[2]}:
                      </strong>
                      <br />
                      {infoCard.info}
                  </Typography>:null}
                  <Typography variant="h6"><span style={{ color: "#ffffff" }}>Try saying:</span> <br /><i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
        </Grid>
      </Grow>
      </ThemeProvider>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
