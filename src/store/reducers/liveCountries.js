import * as actionTypes from '../actions';
import {updateObject} from '../../shared/Utils';
const initialState  = {
    error: null,
    data: [],
    loading: false
}

const getByCountryLive = (state, action) => {
    return updateObject(state, {data: [], loading: true})
}

const getByCountryLiveSuccess = (state, action) => {
    return updateObject(state, {data: action.payload,error: null, loading: false})
}

const getByCountryLiveFail = (state, action) => {
    return updateObject(state, {data: [], loading: false})
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ACTION_GET_SAGA_COUNTRY_LIVE: return getByCountryLive(state, action);
        case actionTypes.ACTION_GET_SUCCESS_COUNTRY_LIVE: return getByCountryLiveSuccess(state, action);
        case actionTypes.ACTION_GET_FAIL_COUNTRY_LIVE: return getByCountryLiveFail(state, action);

        default:
            return state;
    }
};

export default reducer;