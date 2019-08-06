// a reducer is a function that gets two properties, that we are trying to store
import {userActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
