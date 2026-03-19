import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../Components/Screens/LoginScreen';
import RegisterScreen from '../Components/Screens/RegisterScreen';
import Subscription from '../Components/Screens/Subscription';
import PaymentScreen from '../Components/Screens/PaymentScreen';
import VideoPlayerScreen from '../Components/Screens/VideoPlayer';
import AudioPlayerScreen from '../Components/Screens/AudioPlayer';
import LogoHeader from '../Components/Header';
import Home from '../Components/Screens/Home';
import Videos from '../Components/Screens/Videos';
import Sermon from '../Components/Screens/Sermon';
import Audio from '../Components/Screens/Audio';
import DrawerContent from '../Components/DrawerContent';
import Downloads from '../Components/Screens/Downloads';
import Notification from '../Components/Screens/Notification';
import SubscribedPackages from '../Components/Screens/SubscribedPackages';
import Settings from '../Components/Screens/Setting';
import AboutUs from '../Components/Screens/About';
import ContactUs from '../Components/Screens/Contacts';
import Account from '../Components/Screens/Account';

const AuthStack = createNativeStackNavigator();
const VideoStack = createNativeStackNavigator();
const AudioStack = createNativeStackNavigator();
const PackageStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createMaterialTopTabNavigator();

const MainNavigation = () => {
  const { isAuthenticated } = useSelector(state => state.auth);

  const HomeTabs = () => (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 40,
          backgroundColor: '#1A1A1A',
          paddingBottom: 3,
          paddingTop: 3,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#AA001C',
          elevation: 10,
        },
        tabBarActiveTintColor: '#AA001C',
        tabBarInactiveTintColor: 'white',
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Video" component={Videos} />
      <Tabs.Screen name="Audio" component={Audio} />
      <Tabs.Screen name="Sermon" component={Sermon} />
    </Tabs.Navigator>
  );

  const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MainHome"
        component={HomeTabs}
        options={{
          headerStyle: { backgroundColor: '#1A1A1A' },
          headerTitle: () => <LogoHeader navigation={navigation} />,
        }}
      />
    </HomeStack.Navigator>
  );

  const DrawerStackScreen = () => (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{ drawerPosition: 'right' }}
      initialRouteName="HomePage"
    >
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{ title: 'Account' }}
      />
      <Drawer.Screen
        name="HomePage"
        component={HomeStackScreen}
        options={{ title: 'Home', headerShown: false }}
      />
      <Drawer.Screen
        name="Downloads"
        component={Downloads}
        options={{ title: 'Downloads' }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{ title: 'Notification' }}
      />
      <Drawer.Screen
        name="SubscribedPackages"
        component={SubscribedPackages}
        options={{ title: 'Subscriptions' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ title: 'About Us' }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ title: 'Contact Us' }}
      />
    </Drawer.Navigator>
  );

  const VideoStackScreen = () => (
    <VideoStack.Navigator initialRouteName="VideoPlayer">
      <VideoStack.Screen
        name="VideoPlayer"
        component={VideoPlayerScreen}
        options={{ title: 'Video Player' }}
      />
    </VideoStack.Navigator>
  );

  const AudioStackScreen = () => (
    <AudioStack.Navigator initialRouteName="AudioPlayer">
      <AudioStack.Screen
        name="AudioPlayer"
        component={AudioPlayerScreen}
        options={{ title: 'Audio Player' }}
      />
    </AudioStack.Navigator>
  );

  const PackageStackScreen = () => (
    <PackageStack.Navigator>
      <PackageStack.Screen
        name="Package"
        component={Subscription}
        options={{ title: 'Choose Package', headerShown: false }}
      />
      <PackageStack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ title: 'Make Payment', headerShown: false }}
      />
    </PackageStack.Navigator>
  );

  const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={LoginScreen}
        options={{ title: 'Sign In', headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={RegisterScreen}
        options={{ title: 'Sign Up', headerShown: false }}
      />
    </AuthStack.Navigator>
  );

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={isAuthenticated ? "PackageScreen" : "AuthScreen"}>
        {/* {isAuthenticated ? (
          <>
            <MainStack.Screen
              name="PackageScreen"
              component={PackageStackScreen}
              options={{ title: 'Package Screen', headerShown: false }}
            />
            <MainStack.Screen
              name="HomeScreen"
              component={DrawerStackScreen}
              options={{ title: 'Home Screen', headerShown: false }}
            />
            <MainStack.Screen
              name="VideoPlayerScreen"
              component={VideoStackScreen}
              options={{ title: 'Media Player Screen', headerShown: false }}
            />
            <MainStack.Screen
              name="AudioPlayerScreen"
              component={AudioStackScreen}
              options={{ title: 'Media Player Screen', headerShown: false }}
            />
          </>
        ) : (
          <MainStack.Screen
            name="AuthScreen"
            component={AuthStackScreen}
            options={{ title: 'Login Screen', headerShown: false }}
          />
        )} */}
          <>
            <MainStack.Screen
              name="PackageScreen"
              component={PackageStackScreen}
              options={{ title: 'Package Screen', headerShown: false }}
            />
            <MainStack.Screen
              name="HomeScreen"
              component={DrawerStackScreen}
              options={{ title: 'Home Screen', headerShown: false }}
            />
            <MainStack.Screen
              name="VideoPlayerScreen"
              component={VideoStackScreen}
              options={{ title: 'Media Player Screen', headerShown: false }}
            />
            <MainStack.Screen
              name="AudioPlayerScreen"
              component={AudioStackScreen}
              options={{ title: 'Media Player Screen', headerShown: false }}
            />
          </>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
