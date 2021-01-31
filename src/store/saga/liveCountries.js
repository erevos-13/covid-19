import instance from "../../axios";
import * as actions from "../actions";
import { put, call } from "redux-saga/effects";
import * as moment from 'moment';

export function* getByCountriesLive(action) {
  try {
    if (!action.country) {
      return;
    }
    const country = action.country;
    const status = action.status;
    // '2021-01-21T13:13:30Z'
    const country_ = yield instance.get(
      `/live/country/${country}/status/${status}/date/${moment().subtract(5, 'days').format('YYYY-MM-DDTHH:mm:ssZ')}`
    );
    country_.forEach((country) => {
    country.Date = moment(country.Date).format('YYYY-MM-DD')

    })
    yield put(actions.getByCountryLiveSuccess(country_));
  } catch (error) {
    yield put(actions.getCountriesFail(error));
  }
}
