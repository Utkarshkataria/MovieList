import React, { Component } from 'react';


import { Provider } from 'react-redux'
import store from './store'

import MovieList from './screens/Movielist'
import NetworkProvider from './component/NetworkProvider'

 export default class App extends Component {

 
  render() {
    return (      
      <Provider store={store}>
     <NetworkProvider>
      <MovieList />
      </NetworkProvider>
     </Provider>
      
    );
  }
}



