
export const LoginStart = (userCresntails)=>({
    type: "LOGIN_START",
});

export const LoginSuccess = (user)=>({
    type: "LOGIN_SUCCESS",
    payload:user,
});


export const LoginFailure = (error)=>({
    type: "LOGIN_FAILURE",
    payload:error,
});

export const LogOut = (user)=>({
    type: "LOGOUT_SUCCESS",
    
});