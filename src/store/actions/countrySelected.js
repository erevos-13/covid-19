import {ACTION_GET_SAGA_COUNTRY_TOTAL, ACTION_GET_SUCCESS_COUNTRY_TOTAL } from "./ActionsTypes";

export function getCountriesTotal(country) {
    return {
        type: ACTION_GET_SAGA_COUNTRY_TOTAL,
        country: country
    }
}


export function getCountriesTotalSuccess(totalDeath, totalRecovered, totalConfirm) {
    return {
        type: ACTION_GET_SUCCESS_COUNTRY_TOTAL,
        payload: {
            totalDeath: totalDeath,
            totalRecovered: totalRecovered,
            totalConfirm: totalConfirm
        }
    }
}


export function getCountriesTotalFail(error) {
    return {
        type: ACTION_GET_SUCCESS_COUNTRY_TOTAL,
        error: error
    }
}


