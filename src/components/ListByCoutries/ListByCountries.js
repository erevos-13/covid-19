import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import * as actions from "../../store/actions";
import * as moment from 'moment';
import "./ListByCountries.scss";

const ListByCountries = () => {
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.summary);
  console.log(summary);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    dispatch(actions.getSummarySaga());
    console.log("List component");
  }, [dispatch]);

  const summaryGlobal = () => {
    const globalData_ = summary.data?.Global;
    return (
      <div className="TableContainer">
        <div>NewConfirmed: {globalData_.NewConfirmed}</div>
        <div>TotalConfirmed: {globalData_.TotalConfirmed}</div>
        <div>NewDeaths: {globalData_.NewDeaths}</div>
        <div>TotalDeaths: {globalData_.TotalDeaths}</div>
        <div>NewRecovered: {globalData_.NewRecovered}</div>
        <div>Date: {moment(globalData_.Date).format('YYYY-MM-DD, dddd HH:mm:ss')}</div>
      </div>
    );
  };

  return (
    <div className="ListContainer">
      <div className="GlobalContainer">
        {!summary.data ? null : summaryGlobal()}
      </div>
    </div>
  );
};
export default ListByCountries;
