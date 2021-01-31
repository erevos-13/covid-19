import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import PieChartComponent from "../../components/PieChardCountries/PieChartCountries";
import SelectDrop from "../../components/SelectDrop/SelectDrop";
import "./HomePage.scss";
import ListByCountries from "../../components/ListByCoutries/ListByCountries";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";

const HomePage = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="HomepageContainer">
        <div className="HomePageSelectContainer">
          <ListByCountries />
        </div>
        <div className="ChartCategory">
          <SelectDrop />
          {countries.data.length > 0 ? (
            <BarChartComponent country={(countries.selected)? countries.selected.Slug: 'greece'} />
          ) : null}{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
