export const selectGroupsList = groups => {
  if(groups && groups.isFetched){
    return groups.data.data;
  }
};
