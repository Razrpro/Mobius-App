import * as actions from "./actions";

const initialState = {
  events: {
    isFetched: undefined
  }
}

const shedule = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_SHEDULE_FAILED:
        return {
          ...state,
          isFetched: false
        }

      case actions.FETCH_SHEDULE_UNDEFINED:
        return {
          ...state,
          isFetched: undefined
        }

      case actions.FETCH_SHEDULE_SUCCESS:
        return {
          ...state,
          isFetched: true,
          data: action
        }

    default:
      return state;

  }
}

export default shedule;
