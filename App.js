import React, { Component } from 'react';


import { Provider } from 'react-redux'
import store from './store'

import MovieList from './screens/Movielist'

 export default class App extends Component {

 
  render() {
    return (      
      <Provider store={store}>
      <MovieList />
     </Provider>
      
    );
  }
}



