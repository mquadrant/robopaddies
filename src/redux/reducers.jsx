import {CHANGE_SEARCH_FIELD} from './types'

//Single source of truth
//State is read only
//Changes using pure functions

const initialState = {
    searchField:""
}

export const searchRobots = (state=initialState,action={})=>{
switch(action.type){
    case CHANGE_SEARCH_FIELD:
        return {
            ...state,
            searchField: action.payload
        }
    default:
        return state
}
}