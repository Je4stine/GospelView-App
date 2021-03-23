import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import { DrawerContent } from "./DrawerContent";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function drawerStack() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="Home" component={drawerStack} headerMode="none" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
