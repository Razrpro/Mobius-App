import { Api } from "../../api";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGNUP_UNDEFINED = "SIGNUP_UNDEFINED";

export const signupSuccess = data => ({
  type: SIGNUP_SUCCESS,
  data
});

export const signupFailed = data => ({
  type: SIGNUP_FAILED,
  data
});

export const signupUndefined = () => ({
  type: SIGNUP_UNDEFINED
});

export const signup = (phone, email, firstname, lastname, middlename, company) => dispatch => {
  dispatch(signupUndefined());

  return Api.auth.signup(phone, email, firstname, lastname, middlename, company).then(
    response => {
      dispatch(signupSuccess(response.data));
    },
    error => {
      dispatch(signupFailed(error.response.data));
    }
  );
};


export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SIGNIN_UNDEFINED = "SIGNIN_UNDEFINED";

export const signinSuccess = data => ({
  type: SIGNIN_SUCCESS,
  data
});

export const signinFailed = data => ({
  type: SIGNIN_FAILED,
  data
});

export const signinUndefined = () => ({
  type: SIGNIN_UNDEFINED
});

export const signin = (email, password) => dispatch => {
  dispatch(signinUndefined());

  return Api.auth.signin(email, password).then(
      response => {
        dispatch(signinSuccess(response.data));
      },
      error => {
        dispatch(signinFailed(error.response.data));
      }
  );
};


export const AUTHORIZED_SUCCESS = "AUTHORIZED_SUCCESS";
export const authorizedSuccess = () => ({
  type: AUTHORIZED_SUCCESS
});

export const AUTHORIZED_FAILED = "AUTHORIZED_FAILED";
export const authorizedFailed = () => ({
  type: AUTHORIZED_FAILED
});