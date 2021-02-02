import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import PieChartComponent from "../../components/PieChardCountries/PieChartCountries";
import SelectDrop from "../../components/SelectDrop/SelectDrop";
import "./HomePage.scss";
import ListByCountries from "../../components/ListByCoutries/ListByCountries";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";
import ListOfCountries from "../../components/ListOfCountries/ListOfCountries";
import { Grid, Box } from "@material-ui/core";

const HomePage = (props) => {
  const countries = useSelector((state) => state.countries);

  const handlerClick = (item) => {
    props.history.push(`country/${item.Slug}`);
  };
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="HomepageContainer">
        <div className="HomePageSelectContainer">
          <ListByCountries />
        </div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Box component="span" >
            <ListOfCountries onSelectCountry={handlerClick} />
          </Box>
          <div>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <SelectDrop />
              {countries.data.length > 0 ? (
                <BarChartComponent
                  country={
                    countries.selected ? countries.selected.Slug : "greece"
                  }
                />
              ) : null}{" "}
            </Grid>
          </div>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
