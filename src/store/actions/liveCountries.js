import {
  ACTION_GET_SAGA_COUNTRY_LIVE,
  ACTION_GET_SUCCESS_COUNTRY_LIVE,
  ACTION_GET_FAIL_COUNTRY_LIVE,
} from "./ActionsTypes";

export function getByCountryLiveSaga(country_,status_) {
  return {
    type: ACTION_GET_SAGA_COUNTRY_LIVE,
    country: country_,
    status: status_
  };
}

export function getByCountryLiveSuccess(selectedCountry) {
  return {
    type: ACTION_GET_SUCCESS_COUNTRY_LIVE,
    payload: selectedCountry,
  };
}

export function getByCountryLiveFail(error) {
  return {
    type: ACTION_GET_FAIL_COUNTRY_LIVE,
    payload: error,
  };
}
