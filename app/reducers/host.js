import {INITIAL_STATE, CHANGE_HOST, SUCCESS_SAVE} from '../actions/host';

const initialState = {
    host: '',
    editable: false
};

export default function host(state = initialState, action) {
  switch (action.type) {
    case INITIAL_STATE:
        return {
            host: action.hosts,
            editable: false
        };
    case CHANGE_HOST:
        return {
            host: action.hosts,
            editable: true
        };
    case SUCCESS_SAVE:
        return {
            ...state,
            editable: false
        };
    default:
      return state;
  }
}
