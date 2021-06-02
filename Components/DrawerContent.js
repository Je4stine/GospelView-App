import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Text, Drawer, TouchableRipple, Switch, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsIcon from 'react-native-vector-icons/Feather';
import { logout } from '../redux/actions/auth';

const  DrawerContent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const signout = () => {
    dispatch(logout);
    console.log("logout")
    // props.navigation.navigate("AuthScreen")
  }

  return (
    <View style={styles.container}>
       <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={styles.infoWrapper}>
                <Avatar.Image source={{uri: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} size={120} />
                <View style={styles.username}>
                  <Title style={styles.title}>Kosam Omollo</Title> 
                </View>
              </View> 
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
                )} label="Home" onPress={() => {props.navigation.navigate("HomePage")}} 
              />
              <DrawerItem icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
                )} label="Account" onPress={() => {props.navigation.navigate("Account")}} 
              />
              <DrawerItem icon={({color, size}) => (
                <Icon name="download-circle-outline" color={color} size={size} />
                )} label="Downloads" onPress={() => {props.navigation.navigate("Downloads")}} 
              />
              <DrawerItem icon={({color, size}) => (
                <Icon name="bell-outline" color={color} size={size} />
                )} label="Notification" onPress={() => {props.navigation.navigate("Notification")}} 
              />
              <DrawerItem icon={({color, size}) => (
                <Icon name="credit-card-outline" color={color} size={size} />
                )} label="Subscriptions" onPress={() => {props.navigation.navigate("SubscribedPackages")}} 
              />
              <DrawerItem icon={({color, size}) => (
                <SettingsIcon name="settings" color={color} size={size} />
                )} label="Settings" onPress={() => {props.navigation.navigate("Settings")}} 
              />
              <DrawerItem icon={({color, size}) => (
                <Icon name="clipboard-account-outline" color={color} size={size} />
                )} label="About Us" onPress={() => {props.navigation.navigate("AboutUs")}} 
              />
              <DrawerItem icon={({color, size}) => (
                <Icon name="phone" color={color} size={size} />
                )} label="Contact Us" onPress={() => {props.navigation.navigate("ContactUs")}} 
              />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
                <TouchableRipple onPress={toggleTheme}>
                  <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                      <Switch value={isDarkTheme} /> 
                    </View>
                  </View>
                </TouchableRipple>
            </Drawer.Section>
          </View>
       </DrawerContentScrollView>
       <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem icon={({color, size}) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )} label="Sign Out" onPress={signout} />
       </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerContent: {
    flex: 1
  },
  userInfoSection: {
    paddingLeft: 20, 
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#AA001C"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingHorizontal: 20
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3
  },
  drawerSection: { 

  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4", 
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  infoWrapper: {
    marginTop: 15, 
    alignItems: "center"
  },
  username: {
    alignItems: "center"
  }
});
export default DrawerContent;