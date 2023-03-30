export const login = ({ email, passwords }) => {
    return (dispatch) => {
            fetch('http://localhost:4040/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, passwords }),
                })
                .then((response) => response.json())
                .then((data) => {
                        dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.data, token: data.bearer }
                })
        .catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', payload: error });
        });
};
};

export const logout = () => {
    return { type: 'LOGOUT_SUCCESS' };
};

export const fetchUserDetails = (userId) => {
    return (dispatch) => {
        fetch(`https://example.com/users/${userId}`)
            .then((response) => response.json())
            .then((userDetails) => {
                dispatch({
                    type: 'FETCH_USER_DETAILS_SUCCESS',
                    payload: userDetails,
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_USER_DETAILS_ERROR',
                    payload: error,
                });
            });
    };
};