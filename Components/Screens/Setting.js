import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.feature}>Feature coming soon</Text>
      <View style={styles.settings}>
        <Image style={styles.settingslogo} source={require('../../assets/images/Build-your-brand.png')} resizeMode="contain" />
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
  settings: {
    width: "100%",
    flex: 0.5,
  },
  settingslogo: {
    width: "100%",
    height: "100%"
  }
});

export default Settings;
