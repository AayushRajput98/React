import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
        errMess: null,
        comments: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return { ...state, comments: state.comment.concat(comment) };
        case ActionTypes.ADD_DISHES:
            return { ...state, errMess: null, dishes: action.payload };

        case ActionTypes.DISHES_LOADING:
            return { ...state, errMess: null, comments: [] }

        case ActionTypes.DISHES_FAILED:
            return { ...state, errMess: action.payload };
        default:
            return state;
    }

}