import * as actions from "./actions";

const initialState = {
  user: {
    isFetched: undefined
  }
}

const news = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_NEWS_FAILED:
        return {
          ...state,
          isFetched: false
        }

      case actions.FETCH_NEWS_UNDEFINED:
        return {
          ...state,
          isFetched: undefined
        }

      case actions.FETCH_NEWS_SUCCESS:
        return {
          ...state,
          isFetched: true,
          data: action
        }

    default:
      return state;

  }
}

export default news;
