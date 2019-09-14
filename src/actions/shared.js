import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthedUser } from "../actions/authedUser";

const AUTHEDUSERID = "mShady";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ tweets, users }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHEDUSERID));
    });
  };
}
