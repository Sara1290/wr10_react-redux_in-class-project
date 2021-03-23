//initial state, action types, action creators, reducer function//

//initial state//
const initialState = {
    username: "",
    isLoggedIn: false
}

//action types//
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

//action creators//
export function loginUser(usernameStr){
    return {
        type: LOGIN_USER,
        payload: usernameStr
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,

    }
}

//reducer function//
export default function reducer(state = initialState, action){
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                username: action.payload,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            return initialState
        default: return state;
    }
}