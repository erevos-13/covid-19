import { Grid, Container, Box } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Flag from "react-world-flags";
import { makeStyles } from "@material-ui/core/styles";

import "./CountryPage.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: 10
  },

}));

const CountryPage = (props) => {
  const classes = useStyles();
  let { countryId } = useParams();
  console.log(countryId, props);

  return (
    <Container 
    className={classes.root}
    fixed>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        
      >
        <Flag code={"gr"} height="150" />

        <Box component="div">info of country</Box>
      </Grid>
    </Container>
  );
};

export default CountryPage;
