import * as actions from "./actions";

const initialState = {
    isFetched: undefined
}

const groups = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_GROUPS_LIST_FAILED:
        return {
          ...state,
          isFetched: false
        }

      case actions.FETCH_GROUPS_LIST_UNDEFINED:
        return {
          ...state,
          isFetched: undefined
        }

      case actions.FETCH_GROUPS_LIST_SUCCESS:
        return {
          ...state,
          isFetched: true,
          data: action
        }

    default:
      return state;

  }
}

export default groups;
