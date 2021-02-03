import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "recharts";
import * as actions from "./../../store/actions";


const BarChartComponent = ({ country }) => {
  const dispatch = useDispatch();
  const liveCountry_ = useSelector((state) => state.liveCountry);
  const countries_ = useSelector((state) => state.countries);

  console.log(liveCountry_);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    dispatch(actions.getByCountryLiveSaga(country, "confirmed"));
    console.log("Bar chart component");
  }, [dispatch, country]);
  return (
    <BarChart
      width={600}
      height={300}
      data={liveCountry_.data}
      margin={{
        top: 0,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" position="bottom">
        <Label value={country} offset={0} margin={{
            top: 10
        }} position="insideBottom" />
      </XAxis>
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Bar dataKey="Confirmed" fill="#8884d8" />
      <Bar dataKey="Deaths" fill="#FF0000" />
      <Bar dataKey={"Recovered"} fill="#32CD32" />
    </BarChart>
  );
};

export default BarChartComponent;
