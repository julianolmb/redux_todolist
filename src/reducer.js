import {combineReducers} from 'redux'
import {
    VisibilityFilters,
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_ITEM,
    SET_VISIBILITY_FILTER,
 } from "./actions.js";
 function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action){
     switch(action.type){
         case SET_VISIBILITY_FILTER:
             return action.filter;
         default:
             return state;
     }
 }
 function itemReducer(state = [], action){
    switch(action.type){
        case ADD_ITEM:
            return [
                ... state,
                {
                    id: action.id,
                    description: action.text,
                    completed: false,
                },
            ];
        case REMOVE_ITEM:
            return state.filter((value) => {
                return action.id !== value.id;
            });
        case TOGGLE_ITEM:
            return state.map((item) => {
                if(action.id === item.id){
                    return Object.assign({}, item, {completed: !item.completed});
                }
                return item;
            })
        default:
            return state;
    }
}
export const rootReducer = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    item: itemReducer,
});