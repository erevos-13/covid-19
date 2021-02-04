import instance from "../../axios";
import * as actions from "../actions";
import { put, call } from "redux-saga/effects";

export function* getTotalByCountry(action) {
  try {
    const country = action.country;
    const totalOfCountryDeaths_ = yield instance.get(
      `/total/country/${country}/status/deaths`
    );
    const totalOfCountryConfirmed_ = yield instance.get(
      `/total/country/${country}/status/confirmed`
    );
    const totalOfCountryRecovered_ = yield instance.get(
      `/total/country/${country}/status/recovered`
    );
    yield put(
      actions.getCountriesTotalSuccess(
        totalOfCountryDeaths_,
        totalOfCountryRecovered_,
        totalOfCountryConfirmed_
      )
    );
  } catch (err) {
    yield put(actions.getCountriesTotalFail(err));
  }
}
