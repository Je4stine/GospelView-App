import react from 'react';
import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import MainScreenNavigator from './Components/Config/router';
import createStackNavigator from 'react-navigation-stack';
import AccountScreen from './Components/Screens/AccountScreen';



class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1A1A1A" barStyle="light-content" />
        <MainScreenNavigator />
      </View>
    );
  }
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#1A1A1A",

  },
});

