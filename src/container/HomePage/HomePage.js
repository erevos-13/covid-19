import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import PieChartComponent from "../../components/PieChardCountries/PieChartCountries";
import SelectDrop from "../../components/SelectDrop/SelectDrop";
import "./HomePage.scss";
import ListByCountries from "../../components/ListByCoutries/ListByCountries";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="HomepageContainer">
        <div className="HomePageSelectContainer">
          <SelectDrop />
        </div>
        <ListByCountries />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
