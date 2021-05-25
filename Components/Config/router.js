import {createAppContainer, StackRouter} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import Videos from '../Screens/Videos';
import Sermon from '../Screens/Sermon';
import Audio from '../Screens/Audio';
import Contacts from '../Screens/Contacts';
import SettingScreen from '../Screens/SettingScreen';
import Subscription from '../Screens/Subscription';
import Downloads from '../Screens/Downloads';
import About from '../Screens/About'
import AccountScreen from '../Screens/AccountScreen'
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Octicons from '@expo/vector-icons';
import { withNavigation} from 'react-navigation';
import LogoHeader from '../Header';

const Tabs = createMaterialTopTabNavigator(
  {
  
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Home</Text>
          </View>
        ),
      },
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Videos </Text>
          </View>
        ),
      },
    },
    Audio: {
      screen: Audio,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Audio </Text>
          </View>
        ),
      },
    },
    Sermon: {
      screen: Sermon,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Sermon </Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 40,
        backgroundColor: '#1A1A1A',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#AA001C',
        elevation: 10,
      },
      activeTintColor: '#AA001C',
      inactiveTintColor: 'white',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions :({navigation}) => ({
      title: "Main Home", 
      headerStyle: {
        backgroundColor: '#1A1A1A',
      },
      headerTitleStyle: {
        margin: 2,
        fontSize:50,
        color: '#fff',
      },
      headerTitle: props => <LogoHeader {...props} />
    }),
  },
  
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
