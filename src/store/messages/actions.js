import { Api } from "../../api";

export const FETCH_MESSAGES_LIST_SUCCESS = "FETCH_MESSAGES_LIST_SUCCESS";
export const FETCH_MESSAGES_LIST_FAILED = "FETCH_MESSAGES_LIST_FAILED";
export const FETCH_MESSAGES_LIST_UNDEFINED = "FETCH_MESSAGES_LIST_UNDEFINED";

export const fetchMessagesListSuccess = data => ({
  type: FETCH_MESSAGES_LIST_SUCCESS,
  data
});

export const fetchMessagesListFailed = () => ({
  type: FETCH_MESSAGES_LIST_FAILED
});

export const fetchMessagesListUndefined = () => ({
  type: FETCH_MESSAGES_LIST_UNDEFINED
});

export const fetchMessagesList = () => dispatch => {
  dispatch(fetchMessagesListUndefined());

  return Api.message.getMyMessage().then(
      response => {
        dispatch(fetchMessagesListSuccess(response.data));
      },
      error => {
        dispatch(fetchMessagesListFailed(error));
      }
  );
};
