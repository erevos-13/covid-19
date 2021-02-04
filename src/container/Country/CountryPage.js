import React, { useEffect } from "react";
import { Grid, Container, Box } from "@material-ui/core";

import { useParams } from "react-router-dom";
import Flag from "react-world-flags";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import * as moment from "moment";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  LineChart,
  Line,
} from "recharts";
import * as actions from "../../store/actions";

import "./CountryPage.scss";
import ListByStatus from "../../components/ListByStatus/ListByStatus";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: 10,
  },
}));

const CountryPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countriesSummary = useSelector((state) => state.summary);
  const countryLive_ = useSelector((state) => state.liveCountry);
  const totalByStats_ = useSelector((state) => state.selectedCountry);
  let { countryId } = useParams();
  const countrySelected = countriesSummary?.data.Countries.find(
    (c_) => c_.CountryCode === countryId
  );

  console.log(countryId, props);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    dispatch(
      actions.getCountriesTotal(countrySelected.Country)
    );
    console.log("Bar chart component",countryLive_ );
  }, [dispatch, countrySelected]);

  return (
    <Container className={classes.root} fixed>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Flag code={countryId} height="150" />

        <Box component="div">
          <h3>Country: {countrySelected.Country}</h3>
          <p>
            TotalConfirmed:{" "}
            <span className="recover">{countrySelected.TotalConfirmed}</span>
          </p>
          <p>
            NewDeaths:{" "}
            <span className="deaths">{countrySelected.NewDeaths}</span>
          </p>
          <p>
            TotalDeaths:{" "}
            <span className="deaths">{countrySelected.TotalDeaths}</span>
          </p>
          <p>
            NewRecovered:{" "}
            <span className="recover">{countrySelected.NewRecovered}</span>
          </p>
          <p>
            TotalRecovered:{" "}
            <span className="recover">{countrySelected.TotalRecovered}</span>
          </p>
          <p>
            Date:{" "}
            <span className="date">
              {moment(countrySelected.Date).format("YYYY-MM-DD HH:mm:ss")}
            </span>
          </p>
        </Box>
        {countryLive_.data.length === 0 ? null : (
          <Box component="div">
            <LineChart
              width={730}
              height={250}
              data={countryLive_.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Recovered" stroke="#8884d8" />
              <Line type="monotone" dataKey="Deaths" stroke="#82ca9d" />
              <Line type="monotone" dataKey="Confirmed" stroke="#5786b5" />
            </LineChart>
          </Box>
        )}

      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {(totalByStats_.data)? 
        <React.Fragment>
        <ListByStatus stats={totalByStats_.data.totalDeath} />
        <ListByStatus stats={totalByStats_.data.totalRecovered} />
        <ListByStatus stats={totalByStats_.data.totalConfirm} />

        </React.Fragment>
        : null}
      

      </Grid>
    </Container>
  );
};

export default CountryPage;
