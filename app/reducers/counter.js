import { INCREMENT_COUNTER, DECREMENT_COUNTER, INITIAL_STATE } from '../actions/counter';

import {analysizeHost} from '../utils/utils';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case INITIAL_STATE:
        analysizeHost(action.hosts);
        return state;
    default:
      return state;
  }
}
