import instance from "../../axios";
import * as actions from "../actions";
import { put, call } from "redux-saga/effects";

export function* getCountries() {
  try {
    const countries_ = yield instance.get("/countries");
    yield put(actions.getCountriesSuccess(countries_));
  } catch (error) {
    yield put(actions.getCountriesFail(error));
  }
}

export function* getSummary() {
  try {
      const summary_ = yield instance.get('/summary');
      console.log(summary_)
  } catch {}
}


export function* getTotalByCountry(action) {
  try {
    const country = action.country;
    const status = action.status;
      const totalOfCountryDeaths_ = yield instance.get(`/total/country/${country}/status/deaths`);
      const totalOfCountryConfirmed_ = yield instance.get(`/total/country/${country}/status/confirmed`);
  } catch {}
}
