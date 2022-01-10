export const getExpertList = user => {
  if(user.expertsList && user.expertsList.isFetched){
    return user.expertsList.data.data;
  }
}

export const getMyProfile = user => {
  if(user.myprofile && user.myprofile.isFetched){
    return user.myprofile.data.data;
  }
}

export const getUsersList = user => {
  if(user.usersList && user.usersList.isFetched){
    return user.usersList.data.data;
  }
}

export const getUser = user => {
  if(user.user && user.user.isFetched){
    return user.user.data.data;
  }
}