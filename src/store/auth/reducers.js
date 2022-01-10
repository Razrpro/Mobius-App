import * as actions from "./actions";

const initialState = {
  isAuthorized: undefined,
  signup: {
    isFetching: false,
    isFetched: undefined
  },
  signin: {
    isFetching: false,
    isFetched: undefined
  }
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNUP_FAILED:
        return {
          ...state,
          signup: {
            isFetched: true,
            isFetching: false,
            error: action.data
          }
        }

      case actions.SIGNUP_UNDEFINED:
        return {
          ...state,
          signup: {
            isFetched: false,
            isFetching: true
          }
        }

      case actions.SIGNUP_SUCCESS:
        return {
          ...state,
          signup: {
            isFetched: true,
            isFetching: false,
            data: action
          }
        }

    case actions.SIGNIN_FAILED:
      return {
        ...state,
        signin: {
          isFetched: true,
          isFetching: false,
          error: action.data
        },
        isAuthorized: false
      }

    case actions.SIGNIN_UNDEFINED:
      return {
        ...state,
        signin: {
          isFetched: false,
          isFetching: true
        },
        isAuthorized: false
      }

    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        signin: {
          isFetched: true,
          isFetching: false,
          data: action
        },
        isAuthorized: true
      }

    case actions.AUTHORIZED_SUCCESS:
      return {
        ...state,
        isAuthorized: true
      }

    case actions.AUTHORIZED_FAILED:
      return {
        ...state,
        isAuthorized: false
      }

    default:
      return state;

  }
}

export default auth;
