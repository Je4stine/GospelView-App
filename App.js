import React from 'react';
import MainNavigation from './navigation';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
