import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AuthHeader = () => {
  return (
    <View style={styles.logoContainer}> 
        <View style={styles.icon}>
          <Ionicons name="arrow-back-circle" size={32} color="white" /> 
        </View>
        <View style={styles.logoView}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({ 
  logoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 20
  },
  logo: {
    width: 80,
    height: 80
  },
  icon: { 
    justifyContent: 'center'
  },
  logoView: {
    flex: 0.5,
    justifyContent: 'center'
  }
});

export default AuthHeader;