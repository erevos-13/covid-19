import * as actionsTypes from '../actions';
import { takeEvery, all, takeLatest } from "redux-saga/effects";
import {getCountries} from "./countries";
import {getSummary} from "./summary"



export function *watchCountries() {
    yield all([
        takeLatest(actionsTypes.ACTION_GET_COUNTRY_SAGA, getCountries),
        takeEvery(actionsTypes.ACTION_GET_SUMMARY_SAGA, getSummary)
    ])
}