import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainApp from './src/MainApp';

 class App extends Component {


  render() {
    return (
      <Provider store ={store}>
<MainApp />
      </Provider>
      
    );
  }
}

export default App;