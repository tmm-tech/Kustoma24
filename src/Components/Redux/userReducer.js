const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload.userId,
                user: action.payload.user,
                token: action.payload.token,
                error: null,
            };
        case 'LOGIN_ERROR':
            return {...state, isLoggedIn: false, error: action.payload };
        case 'LOGOUT_SUCCESS':
            return {...state, isLoggedIn: false, userId: null, userDetails: null };
        case 'FETCH_USER_DETAILS_SUCCESS':
            return {...state, userDetails: action.payload };
        case 'FETCH_USER_DETAILS_ERROR':
            return {...state, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;