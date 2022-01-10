export const getEventsList = shedule => {
  if(shedule && shedule.isFetched){
    return shedule.data.data;
  }
}

export const getEventsFetchingStatus = shedule => {
  return shedule.isFetched === undefined ? true : false;
}
