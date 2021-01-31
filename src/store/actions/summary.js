import {
  ACTION_GET_SUMMARY_FAIL,
  ACTION_GET_SUMMARY_SUCCESS,
  ACTION_GET_SUMMARY_SAGA,
} from "./ActionsTypes";

export function getSummarySaga() {
  return {
    type: ACTION_GET_SUMMARY_SAGA,
  };
}

export function getSummarySuccess(countries) {
  return {
    type: ACTION_GET_SUMMARY_SUCCESS,
    payload: countries,
  };
}

export function getSummaryFail(error) {
  return {
    type: ACTION_GET_SUMMARY_FAIL,
    error: error,
  };
}
