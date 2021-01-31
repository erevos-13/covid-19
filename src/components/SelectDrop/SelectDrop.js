import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import "./SelectDrop.scss";

const SelectDrop = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [selectCountry, setSelectCountry] = useState('Select Country')
  console.log(countries);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    dispatch(actions.getCountriesSaga());
    console.log("HomePage component");
  }, [dispatch]);

  const listOptions = () => {
    return countries.data.map((countries_, index) => {
      return (
        <Dropdown.Item
          eventKey={countries_.Country}
          key={countries_.ISO2}
          value={countries_}
        >
          {countries_.Country}
        </Dropdown.Item>
      );
    });
  };
  const selectHandler = (item) => {
    console.log(item);
    const findSelectCountry_ = countries.data.find((k_) => k_.Country === item);
    setSelectCountry(findSelectCountry_.Country)
    dispatch(actions.getCountriesSelected(findSelectCountry_));
  };
  return (
    <DropdownButton
      id="dropdown-item-button"
      title={selectCountry}
      onSelect={(item) => selectHandler(item)}
    >
      {countries.data.length > 0 ? listOptions() : null}
    </DropdownButton>
  );
};

export default SelectDrop;
