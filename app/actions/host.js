import {ipcRenderer} from 'electron';

export const INITIAL_STATE = 'INITIAL_STATE';

export const CHANGE_HOST = 'CHANGE_HOST';

export const SUCCESS_SAVE = 'SUCCESS_SAVE';

export function changeHost(newHost) {
  return {
    type: CHANGE_HOST,
    hosts: newHost
  };
}

export function initial(hosts) {
  return {
    type: INITIAL_STATE,
    hosts
  };
}

export function initialHost() {
  return dispatch => {
    ipcRenderer.on('loadhosts', (event, message) => {
        dispatch(initial(message));
    });
  }
}
