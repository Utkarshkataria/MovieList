// connectionActions.js
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
let handleConnectionChange;

export function registerListeners() {
  return (dispatch) => {
    handleConnectionChange = (connectionInfo) => {
      dispatch(connectionChanged(connectionInfo));
      console.log('connectionInfo')
      console.log(connectionInfo)
    }
    NetInfo.addEventListener('connectionChange', handleConnectionChange);
  }
}

export function unregisterListeners() {
  return (dispatch) => {
    handleConnectionChange && NetInfo.removeEventListener('connectionChange', handleConnectionChange);
  }
}

function connectionChanged(connectionInfo) {
  return (dispatch) => {
    switch (connectionInfo.type) {
      case 'cellular':
        dispatch({
          type: CONNECTION_AVAILABLE,
          payload: connectionInfo.type
        });
        break;
      // ...Other cases
    }
  }
}