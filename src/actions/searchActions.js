import { searchConstants } from '../constants/searchConstants';
import { alertActions } from './alertActions';
import { searchService } from '../services/searchService';

export const searchActions = {
    newSearch
}

function newSearch(params){
    return dispatch => {
        dispatch(request(params));

        searchService.newSearch(params).then((results) => {
            dispatch(success(results));

        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request(params) { return { type: searchConstants.SEARCH_REQUEST, params }};
    function success(results) { return { type: searchConstants.SEARCH_SUCCESS, results }};
    function failure(error) { return { type: searchConstants.SEARCH_FAILURE, error }};
}