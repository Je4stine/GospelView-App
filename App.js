import React from 'react';

import MainNavigation from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'react-native';


const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#1A1A1A" barStyle="light-content" />
      <MainNavigation />
    </Provider>
    
  ); 
};


export default App;