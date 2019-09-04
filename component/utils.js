import Snackbar from 'react-native-snackbar';
export const showSnackbar = ( message ) => {
    Snackbar.dismiss(); // dismiss if a snackbar is still "alive"
    duration = Snackbar.LENGTH_SHORT
     console.log('message')
     console.log(message)
      Snackbar.show({
          title: message,
          duration:duration,
          color:'white'
          
      });
    }