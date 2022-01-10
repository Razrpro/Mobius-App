export const getMessagesList = messages => {
  if(messages.isFetched && messages.data){
    return messages.data.data;
  }
}