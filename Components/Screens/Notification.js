import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Notification  = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.feature}>Feature coming soon</Text>
      <View style={styles.notify}>
        <Image style={styles.notifylogo} source={require('../../assets/images/notify.png')} resizeMode="contain" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  feature: {
    fontSize: 18,
    paddingVertical: 20,
    fontWeight: "600"
  },
  notify: {
    width: "100%",
    flex: 0.5,
  },
  notifylogo: {
    width: "100%",
    height: "100%"
  }
});

export default Notification;