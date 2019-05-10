import { searchConstants } from '../constants/searchConstants';

export function search(state = {}, action){
    switch(action.type){
        case searchConstants.SEARCH_REQUEST:
            return {
                sending: true,
                results: action.results,
                params: action.params
            }
        case searchConstants.SEARCH_SUCCESS:
            return {
                sent: true,
                results: action.results,
                params: action.params
            }
        case searchConstants.SEARCH_FAILURE:
            return {};
        default:
            return state;
    }
}