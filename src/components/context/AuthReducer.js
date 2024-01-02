const AuthReducer = (state, action) => {

    switch(action.type) {
        case "LOGIN": {
            return {
                currentUser: action.Users,
            };
        }
        case "LOGOUT": {
            return {
                currentUser: null,
            };
        }
        default:
            return state;        
    }

};

export default AuthReducer;
