import * as actions from "./actions";

const initialState = {
  myprofile: {
    isFetched: undefined
  },
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_EXPERTS_LIST_FAILED:
      return {
        ...state,
        expertsList: {
          isFetched: false
        }
      }

    case actions.FETCH_EXPERTS_LIST_UNDEFINED:
      return {
        ...state,
        expertsList: {
          isFetched: false
        }
      }

    case actions.FETCH_EXPERTS_LIST_SUCCESS:
      return {
        ...state,
        expertsList: {
          isFetched: true,
          data: action
        }
      }

    case actions.FETCH_MY_PROFILE_FAILED:
      return {
        ...state,
        myprofile: {
          isFetched: false
        }
      }

    case actions.FETCH_MY_PROFILE_UNDEFINED:
      return {
        ...state,
        myprofile: {
          isFetched: false
        }
      }

    case actions.FETCH_MY_PROFILE_SUCCESS:
      return {
        ...state,
        myprofile: {
          isFetched: true,
          data: action
        }
      }

    case actions.FETCH_USERS_LIST_FAILED:
      return {
        ...state,
        usersList: {
          isFetched: false
        }
      }

    case actions.FETCH_USERS_LIST_UNDEFINED:
      return {
        ...state,
        usersList: {
          isFetched: false
        }
      }

    case actions.FETCH_USERS_LIST_SUCCESS:
      return {
        ...state,
        usersList: {
          isFetched: true,
          data: action
        }
      }

    case actions.FETCH_USER_FAILED:
      return {
        ...state,
        user: {
          isFetched: false
        }
      }

    case actions.FETCH_USER_UNDEFINED:
      return {
        ...state,
        user: {
          isFetched: false
        }
      }

    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: {
          isFetched: true,
          data: action
        }
      }

    default:
      return state;

  }
}

export default user;
