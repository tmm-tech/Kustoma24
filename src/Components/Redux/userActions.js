export const login = ({ email, passwords }) => {
    return (dispatch) => {

        try {
            console.log("Success Login")
            fetch('http://localhost:4040/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, passwords }),
                })
                .then((response) => response.json())
                .then((data) => {
                    dispatch({
                            type: 'LOGIN_SUCCESS',
                            payload: { user: data.data, token: data.bearer }
                        })
                        .catch((error) => {
                            dispatch({ type: 'LOGIN_ERROR', payload: error });
                        });
                });
        } catch (error) {
            console.log(`My Error this time ${error}`);
        }
    };
};
export const logout = () => {
    return { type: 'LOGOUT_SUCCESS' };
};

export const fetchUserDetails = (email) => {
    return (dispatch) => {
        fetch(`http://localhost:4040/users/logout/${email}`)
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