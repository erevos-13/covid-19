import {ACTION_GET_FAIL_COUNTRY_TOTAL,ACTION_GET_SAGA_COUNTRY_TOTAL, ACTION_GET_SUCCESS_COUNTRY_TOTAL, ACTION_GET_COUNTRY_SAGA, ACTION_GET_COUNTRY_SUCCESS, ACTION_GET_COUNTRY_FAIL, ACTION_GET_COUNTRY_SELECTED } from "./ActionsTypes";

export function getCountriesSaga() {
    return {
        type: ACTION_GET_COUNTRY_SAGA
    }
}


export function getCountriesSuccess(countries) {
    return {
        type: ACTION_GET_COUNTRY_SUCCESS,
        payload: countries
    }
}


export function getCountriesFail(error) {
    return {
        type: ACTION_GET_COUNTRY_FAIL,
        error: error
    }
}

export function getCountriesSelected(selectedCountry) {
    return {
        type: ACTION_GET_COUNTRY_SELECTED,
        payload: selectedCountry
    }
}

export function getTotalOFCountrySaga(country) {
    return {
        type: ACTION_GET_SAGA_COUNTRY_TOTAL,
        country: country
    }
}
export function getTotalOFCountrySuccess(data) {
    return {
        type: ACTION_GET_SUCCESS_COUNTRY_TOTAL,
        payload: data
    }
}

export function getTotalOFCountryFail(error) {
    return {
        type: ACTION_GET_SUCCESS_COUNTRY_TOTAL,
        error: error
    }
}