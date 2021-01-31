import instance from "../../axios";
import * as actions from "../actions";
import { put, call } from "redux-saga/effects";

export function* getSummary() {
  try {
    const summary_ = yield instance.get("/summary");
    console.log(summary_);
    yield put(actions.getSummarySuccess(summary_));
  } catch (error) {
    yield put(actions.getSummaryFail(error));
  }
}
