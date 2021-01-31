import * as actionTypes from '../actions';
import {updateObject} from '../../shared/Utils';
const initialState  = {
    error: null,
    data: [],
    loading: false

}

const getSummarySuccess = (state, action) => {
    return updateObject(state, {data: action.payload, loading: false})
}

const getSummaryFail = (state, action) => {
    return updateObject(state, {data: [],error: action.error, loading: false})
}
const getSummaryStart = (state, action) => {
    return updateObject(state, {data: [],error: null, loading: true})
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ACTION_GET_SUMMARY_SAGA: return getSummaryStart(state, action);
        case actionTypes.ACTION_GET_SUMMARY_SUCCESS: return getSummarySuccess(state, action);
        case actionTypes.ACTION_GET_SUMMARY_FAIL: return getSummaryFail(state, action);

        default:
            return state;
    }
};

export default reducer;