import { Api } from "../../api";

export const FETCH_EXPERTS_LIST_SUCCESS = "FETCH_EXPERTS_LIST_SUCCESS";
export const FETCH_EXPERTS_LIST_FAILED = "FETCH_EXPERTS_LIST_FAILED";
export const FETCH_EXPERTS_LIST_UNDEFINED = "FETCH_EXPERTS_LIST_UNDEFINED";

export const fetchExpertListSuccess = data => ({
  type: FETCH_EXPERTS_LIST_SUCCESS,
  data
});

export const fetchExpertListFailed = () => ({
  type: FETCH_EXPERTS_LIST_FAILED
});

export const fetchExpertListUndefined = () => ({
  type: FETCH_EXPERTS_LIST_UNDEFINED
});

export const fetchExpertList = (start=0, count=100, filter) => dispatch => {
  dispatch(fetchExpertListUndefined());

  return Api.users.getExpertList(start, count, filter).then(
      response => {
        dispatch(fetchExpertListSuccess(response.data));
      },
      error => {
        dispatch(fetchExpertListFailed(error));
      }
  );
};

export const FETCH_MY_PROFILE_SUCCESS = "FETCH_MY_PROFILE_SUCCESS";
export const FETCH_MY_PROFILE_FAILED = "FETCH_MY_PROFILE_FAILED";
export const FETCH_MY_PROFILE_UNDEFINED = "FETCH_MY_PROFILE_UNDEFINED";

export const fetchMyProfileSuccess = data => ({
  type: FETCH_MY_PROFILE_SUCCESS,
  data
});

export const fetchMyProfileFailed = () => ({
  type: FETCH_MY_PROFILE_FAILED
});

export const fetchMyProfileUndefined = () => ({
  type: FETCH_MY_PROFILE_UNDEFINED
});

export const fetchMyProfile = () => dispatch => {
  dispatch(fetchMyProfileUndefined());

  return Api.users.getMyProfile().then(
      response => {
        dispatch(fetchMyProfileSuccess(response.data));
      },
      error => {
        dispatch(fetchMyProfileFailed(error));
      }
  );
};


export const FETCH_USERS_LIST_SUCCESS = "FETCH_USERS_LIST_SUCCESS";
export const FETCH_USERS_LIST_FAILED = "FETCH_USERS_LIST_FAILED";
export const FETCH_USERS_LIST_UNDEFINED = "FETCH_USERS_LIST_UNDEFINED";

export const fetchUsersListSuccess = data => ({
  type: FETCH_USERS_LIST_SUCCESS,
  data
});

export const fetchUsersListFailed = () => ({
  type: FETCH_USERS_LIST_FAILED
});

export const fetchUsersListUndefined = () => ({
  type: FETCH_USERS_LIST_UNDEFINED
});

export const fetchUsersList = (start=0, count=100, filter) => dispatch => {
  dispatch(fetchUsersListUndefined());

  return Api.users.getUsersList(start, count, filter).then(
      response => {
        dispatch(fetchUsersListSuccess(response.data));
      },
      error => {
        dispatch(fetchUsersListFailed(error));
      }
  );
};


export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const FETCH_USER_UNDEFINED = "FETCH_USER_UNDEFINED";

export const fetchUserSuccess = data => ({
  type: FETCH_USER_SUCCESS,
  data
});

export const fetchUserFailed = () => ({
  type: FETCH_USER_FAILED
});

export const fetchUserUndefined = () => ({
  type: FETCH_USER_UNDEFINED
});

export const fetchUser = (id) => dispatch => {
  dispatch(fetchUserUndefined());

  return Api.users.getUser(id).then(
      response => {
        dispatch(fetchUserSuccess(response.data));
      },
      error => {
        dispatch(fetchUserFailed(error));
      }
  );
};
