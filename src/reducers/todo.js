import { CALL_API_REQUEST, API_CALL_FAILURE, API_CALL_SUCCESS } from "../utils/constants";
let todoReducer = (state = {}, action) =>
{
    switch (action.type)
    {
        case CALL_API_REQUEST:
            return Object.assign({}, state, { fetching: true });
        case API_CALL_FAILURE:
            return Object.assign({}, state, {
                fetching: false, 
                error: action.error
            });
        case API_CALL_SUCCESS:
            return Object.assign({}, state, {
                todoList: action.todoList,
                fetching: false
            });
        default:
            return state;
    }
}

export default todoReducer;