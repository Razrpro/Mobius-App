import * as actions from "./actions";

const initialState = {
    isFetched: undefined,
    data: undefined
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MESSAGES_LIST_FAILED:
      return {
        ...state,
        isFetched: false,
        data: undefined
      }

    case actions.FETCH_MESSAGES_LIST_UNDEFINED:
      return {
        ...state,
        isFetched: false,
        data: undefined
      }

    case actions.FETCH_MESSAGES_LIST_SUCCESS:
      return {
        ...state,
        isFetched: true,
        data: action
      }

    default:
      return state;

  }
}

export default messages;
