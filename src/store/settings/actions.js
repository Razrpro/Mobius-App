
export const TOOGLE_LANGUAGE_SUCCESS = "CHANGE_LANGUAGE_SUCCESS";

export const toogleLanguageSuccess = () => ({
  type: TOOGLE_LANGUAGE_SUCCESS
});

export const toogleLanguage = () => dispatch => {
  dispatch(toogleLanguageSuccess());
};


export const SCROLL_TO_BOTTOM_SUCCESS = "SCROLL_TO_BOTTOM_SUCCESS";

export const scrollToBottomSuccess = () => ({
  type: SCROLL_TO_BOTTOM_SUCCESS
});

export const scrollToBottom = () => dispatch => {
  dispatch(scrollToBottomSuccess());
};