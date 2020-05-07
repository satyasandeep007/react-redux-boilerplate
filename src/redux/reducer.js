import { combineReducers } from 'redux';

const taskReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}


const loggedReducer = (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true
            };
        case 'LOGOUT':
            return {
                isLoggedIn: false
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    tasks: taskReducer,
    logger: loggedReducer
})

export default rootReducer;
