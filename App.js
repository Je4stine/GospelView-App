import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import MainScreenNavigator from './Components/Config/router';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#444447" barStyle="light-content" />
        <MainScreenNavigator />
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#444447",

  },
});

