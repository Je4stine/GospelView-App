import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerContent } from "./DrawerContent";
import SettingScreen from './Screens/SettingScreen';
import Subscription from './Screens/Subscription';
import Downloads from './Screens/Downloads';
import AccountScreen from './Screens/AccountScreen';
import Home from "./Screens/Home";





const Stack = createStackNavigator();

 function drawerStack() {
  return (
    <Stack.Navigator >
     <Stack.Screen name="Subscription" component = {Subscription}/>
     <Stack.Screen name =" SettingScreen" component ={SettingScreen}/>
     <Stack.Scren name = " Downloads" component ={Downloads}/>
    </Stack.Navigator>


 );
}
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={() => <DrawerContent />}>
       <Drawer.Screen name="AccountScreen" component={drawerStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

