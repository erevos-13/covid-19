import * as actionTypes from '../actions';
import {updateObject} from '../../shared/Utils';
const initialState  = {
    error: null,
    data: [],
    loading: false,
    selected: null

}

const getCountriesSuccess = (state, action) => {
    return updateObject(state, {data: action.payload, loading: false})
}

const getCountriesFail = (state, action) => {
    return updateObject(state, {data: [],error: action.error, loading: false})
}

const getCountriesSelected = (state, action) => {
    return updateObject(state, {selected: action.payload})
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ACTION_GET_COUNTRY_SUCCESS: return getCountriesSuccess(state, action);
        case actionTypes.ACTION_GET_COUNTRY_FAIL: return getCountriesFail(state, action);
        case actionTypes.ACTION_GET_COUNTRY_SELECTED: return getCountriesSelected(state, action);

        default:
            return state;
    }
};

export default reducer;