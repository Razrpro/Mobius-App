import * as actions from "./actions";

const initialState = {
  language: 0
}

const settings = (state = initialState, action) => {
  switch (action.type) {
      case actions.TOOGLE_LANGUAGE_SUCCESS:
        return {
          ...state,
          language: state.language === 0 ? 1 : 0
        }

      case actions.SCROLL_TO_BOTTOM_SUCCESS:
        return {
          ...state,
          scrollToBottom: true
        }

    default:
      return state;

  }
}

export default settings;
