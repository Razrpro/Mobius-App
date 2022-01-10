import { Api } from "../../api";

export const FETCH_SHEDULE_SUCCESS = "FETCH_SHEDULE_SUCCESS";
export const FETCH_SHEDULE_FAILED = "FETCH_SHEDULE_FAILED";
export const FETCH_SHEDULE_UNDEFINED = "FETCH_SHEDULE_UNDEFINED";

export const fetchSheduleSuccess = data => ({
  type: FETCH_SHEDULE_SUCCESS,
  data
});

export const fetchSheduleFailed = () => ({
  type: FETCH_SHEDULE_FAILED
});

export const fetchSheduleUndefined = () => ({
  type: FETCH_SHEDULE_UNDEFINED
});

export const fetchSheduleList = () => dispatch => {
  dispatch(fetchSheduleUndefined());

  return Api.shedule.getSheduleList().then(
    response => {
      dispatch(fetchSheduleSuccess(response.data));
    },
    error => {
      dispatch(fetchSheduleFailed(error));
    }
  );
};
