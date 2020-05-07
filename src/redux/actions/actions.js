import { INCREMENT, DECREMENT, LOGIN, LOGOUT } from '../constants/actionTypes';

export const increment = (task) => ({
    type: INCREMENT,
})

export const decrement = (task) => ({
    type: DECREMENT,
})

export const login = (task) => ({
    type: LOGIN,
})

export const logout = (task) => ({
    type: LOGOUT,
})
