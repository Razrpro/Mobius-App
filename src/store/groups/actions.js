import { Api } from "../../api";

export const FETCH_GROUPS_LIST_SUCCESS = "FETCH_GROUPS_LIST_SUCCESS";
export const FETCH_GROUPS_LIST_FAILED = "FETCH_GROUPS_LIST_FAILED";
export const FETCH_GROUPS_LIST_UNDEFINED = "FETCH_GROUPS_LIST_UNDEFINED";

export const fetchGroupsListSuccess = data => ({
  type: FETCH_GROUPS_LIST_SUCCESS,
  data
});

export const fetchGroupsListFailed = () => ({
  type: FETCH_GROUPS_LIST_FAILED
});

export const fetchGroupsListUndefined = () => ({
  type: FETCH_GROUPS_LIST_UNDEFINED
});

export const fetchGroupsList = () => dispatch => {
  dispatch(fetchGroupsListUndefined());

  return Api.groups.getGroups().then(
    response => {
      dispatch(fetchGroupsListSuccess(response.data));
    },
    error => {
      dispatch(fetchGroupsListFailed(error));
    }
  );
};
