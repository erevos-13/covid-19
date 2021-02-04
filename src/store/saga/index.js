import * as actionsTypes from "../actions";
import { takeEvery, all, takeLatest } from "redux-saga/effects";
import { getCountries } from "./countries";
import { getSummary } from "./summary";
import { getByCountriesLive } from "./liveCountries";
import {getTotalByCountry} from "./countriesSelected";

export function* watchCountries() {
  yield all([
    takeLatest(actionsTypes.ACTION_GET_COUNTRY_SAGA, getCountries),
    takeEvery(actionsTypes.ACTION_GET_SUMMARY_SAGA, getSummary),
    takeEvery(actionsTypes.ACTION_GET_SAGA_COUNTRY_LIVE, getByCountriesLive),
    takeEvery(actionsTypes.ACTION_GET_SAGA_COUNTRY_TOTAL, getTotalByCountry),
  ]);
}
