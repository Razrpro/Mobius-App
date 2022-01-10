export const getNewsList = news => {
  if(news && news.isFetched){
    return news.data.data;
  }
}

export const getNewsFetchingStatus = news => {
  return news.isFetched === undefined ? true : false;
}
