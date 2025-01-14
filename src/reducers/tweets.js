import { RECEIVE_TWEETS } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...action.tweets };
    default:
      return state;
  }
}
