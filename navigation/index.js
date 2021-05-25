import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreenNavigator from '../Components/Config/router';
import LoginScreen from '../Components/Screens/LoginScreen';
import RegisterScreen from '../Components/Screens/RegisterScreen';
import Subscription from '../Components/Screens/Subscription';
import PaymentScreen from '../Components/Screens/PaymentScreen';
import { checkValidToken } from '../redux/actions/auth';

const AuthStack = createStackNavigator(); 
const PackageStack = createStackNavigator();

const MainNavigation =  () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkValidToken());
  }, [dispatch]);

  return (
    <NavigationContainer>
      { isAuthenticated ? user && user.subscribed ? (
        <MainScreenNavigator />
        ) : (
          <PackageStack.Navigator>
            <PackageStack.Screen name="Package" component={Subscription} options={{title: 'Choose Package', headerShown: false}}/>
            <PackageStack.Screen name="Payment" component={PaymentScreen} options={{title: 'Make Payment', headerShown: false}} />
          </PackageStack.Navigator>
        )
      : (
        <AuthStack.Navigator initialRouteName="SignIn">
          <AuthStack.Screen name="SignIn" component={LoginScreen} options={{title: 'Sign In', headerShown: false}} />
          <AuthStack.Screen name="SignUp" component={RegisterScreen} options={{title: 'Sign Up', headerShown: false}} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default MainNavigation;