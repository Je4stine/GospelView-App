import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import AboutUs from  '../Components/Screens/About';
import ContactUs from '../Components/Screens/Contacts';
import Account from '../Components/Screens/Account';

// import { checkValidToken } from '../redux/actions/auth';

const AuthStack = createStackNavigator(); 
const VideoStack = createStackNavigator();
const AudioStack = createStackNavigator();
const PackageStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation =  () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkValidToken());
  // }, [dispatch]);

  

  const Tabs = createMaterialTopTabNavigator();

  const tabBarOptions = {
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
  }

  const HomeTabs = () => (
    <Tabs.Navigator tabBarOptions={tabBarOptions}>
      <Tabs.Screen name="Home" component={Home}  />
      <Tabs.Screen name="Video" component={Videos}  />
      <Tabs.Screen name="Audio" component={Audio}  />
      <Tabs.Screen name="Sermon" component={Sermon}  />
    </Tabs.Navigator>
  )

  const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator> 
      <HomeStack.Screen name="MainHome" component={HomeTabs} options={{title: "Main Home", headerShown:true, headerStyle: {backgroundColor: '#1A1A1A',}, headerTitleStyle:  { margin: 0, fontSize:50, color: '#fff' }, headerTitle: props => <LogoHeader {...props} navigation={navigation} /> }} />
    </HomeStack.Navigator>
  );

  const DrawerStackScreen = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerPosition="right" initialRouteName="HomePage" >
      <Drawer.Screen name="Account" component={Account} options={{title: "Account", headerShown: true}} />
      <Drawer.Screen name="HomePage" component={HomeStackScreen} options={{title: "Home"}} />
      <Drawer.Screen name="Downloads" component={Downloads} options={{title: "Downloads", headerShown: true}} />
      <Drawer.Screen name="Notification" component={Notification} options={{title: "Notification", headerShown: true}} />
      <Drawer.Screen name="SubscribedPackages" component={SubscribedPackages} options={{title: "Subscriptions", headerShown: true}} />
      <Drawer.Screen name="Settings" component={Settings} options={{title: "Settings", headerShown: true}} />
      <Drawer.Screen name="AboutUs" component={AboutUs} options={{title: "About Us", headerShown: true}} />
      <Drawer.Screen name="ContactUs" component={ContactUs} options={{title: "Contact Us", headerShown: true}} />
    </Drawer.Navigator>
  ) 

  const VideoStackScreen = () => (
    <VideoStack.Navigator initialRouteName="VideoPlayer">
      <VideoStack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{title: "Video Player", headerShown: true}}/> 
    </VideoStack.Navigator> 
  );

  const AudioStackScreen = () => (
    <AudioStack.Navigator initialRouteName="AudioPlayer"> 
      <AudioStack.Screen name="AudioPlayer" component={AudioPlayerScreen} options={{title: "Audio Player", headerShown: true}}/> 
    </AudioStack.Navigator> 
  );

  const PackageStackScreen = () => (
    <PackageStack.Navigator>
      <PackageStack.Screen name="Package" component={Subscription} options={{title: 'Choose Package', headerShown: false}}/>
      <PackageStack.Screen name="Payment" component={PaymentScreen} options={{title: 'Make Payment', headerShown: false}} />
    </PackageStack.Navigator>
  )

  const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={LoginScreen} options={{title: 'Sign In', headerShown: false}} />
      <AuthStack.Screen name="SignUp" component={RegisterScreen} options={{title: 'Sign Up', headerShown: false}} />
    </AuthStack.Navigator>
  )

  return (
    <NavigationContainer> 
      <MainStack.Navigator initialRouteName="PackageScreen">
        { isAuthenticated ? (
          <>
          <MainStack.Screen name="HomeScreen" component={DrawerStackScreen} options={{title: "Home Screen", headerShown: false}} />
          <MainStack.Screen name="VideoPlayerScreen" component={VideoStackScreen}  options={{title: "Media Player Screen", headerShown: false }} />
          <MainStack.Screen name="AudioPlayerScreen" component={AudioStackScreen}  options={{title: "Media Player Screen", headerShown: false }} />
          <MainStack.Screen name="PackageScreen" component={PackageStackScreen} options={{title: 'Package Screen', headerShown: false }} />
          </>
        ) : (
          <MainStack.Screen name="AuthScreen" component={AuthStackScreen} options={{title: 'Login Screen', headerShown: false }} /> 
        ) }
      </MainStack.Navigator> 
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default MainNavigation;