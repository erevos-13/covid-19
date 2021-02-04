import * as actionTypes from '../actions';
import {updateObject} from '../../shared/Utils';
const initialState  = {
    error: null,
    data: null,
    loading: false,


}

const getCountriesTotalStart = (state, action) => {
    return updateObject(state, {data: null, loading: true})

}
const getCountriesTotalSuccess = (state, action) => {
    return updateObject(state, {data: action.payload, loading: false})
}

const getCountriesTotalFail = (state, action) => {
    return updateObject(state, {data: null,error: action.error, loading: false})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ACTION_GET_SAGA_COUNTRY_TOTAL: return getCountriesTotalStart(state, action);
        case actionTypes.ACTION_GET_SUCCESS_COUNTRY_TOTAL: return getCountriesTotalSuccess(state, action);
        case actionTypes.ACTION_GET_FAIL_COUNTRY_TOTAL: return getCountriesTotalFail(state, action);

        default:
            return state;
    }
};

export default reducer;