import { Api } from "../../api";

export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILED = "FETCH_NEWS_FAILED";
export const FETCH_NEWS_UNDEFINED = "FETCH_NEWS_UNDEFINED";

export const fetchNewsSuccess = data => ({
  type: FETCH_NEWS_SUCCESS,
  data
});

export const fetchNewsFailed = () => ({
  type: FETCH_NEWS_FAILED
});

export const fetchNewsUndefined = () => ({
  type: FETCH_NEWS_UNDEFINED
});

export const fetchNewsList = (start=0, count=100) => dispatch => {
  dispatch(fetchNewsUndefined());

  return Api.news.getNewsList(start, count).then(
    response => {
      dispatch(fetchNewsSuccess(response.data));
    },
    error => {
      dispatch(fetchNewsFailed(error));
    }
  );
};
