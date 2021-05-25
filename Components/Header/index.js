import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.logo} source={require('../../assets/logo.png')} />
      <TouchableOpacity>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AccountIcon name="account" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50
  }
});

export default LogoHeader;