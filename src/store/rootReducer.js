import { combineReducers } from "redux";

import user from "./user/reducers";
import settings from "./settings/reducers";
import shedule from "./shedule/reducers";
import news from "./news/reducers";
import messages from "./messages/reducers";
import groups from "./groups/reducers";
import auth from "./auth/reducers";

const appReducer = combineReducers({
  user,
  settings,
  shedule,
  news,
  messages,
  groups,
  auth
});

export default function rootReducer(state, action) {
  if(action.type === "CLEAR_REDUX_STATE") {
    state = undefined;
  }

  return appReducer(state, action);
};
