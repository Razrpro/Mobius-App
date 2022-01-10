
export const getAuthStatus = auth => {
    return auth.isAuthorized;
}


export const getSignupStatus = auth => {
    return auth.signup;
}

export const getSignupStatusEmailAlreadyInUse = auth => {

    return (
        auth.signup.isFetched &&
        auth.signup.error &&
        auth.signup.error.status === "EMAIL_ALREADY_IN_USE"
    ) ? true : false;
}


export const getSigninStatus = auth => {
    return auth.signin;
}

export const getSigninStatusErrorPassword = auth => {

    return (
        auth.signin.isFetched &&
        auth.signin.error &&
        auth.signin.error.status === "WRONG_PASSWORD"
    ) ? true : false;
}

export const getSigninStatusUserNotExist = auth => {

    return (
        auth.signin.isFetched &&
        auth.signin.error &&
        auth.signin.error.status === "USER_NOT_EXIST"
    ) ? true : false;
}