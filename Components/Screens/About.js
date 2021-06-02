import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AboutUs  = ({ navigation }) => {
  const callNumber = phone => { 
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    }
    else  {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Invalid Phone','Phone number is not available', [{ text: "Ok" }]);
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} resizeMode="contain" />
      </View>
      <View style={styles.aboutapp}>
        <Text style={styles.font}>Gospel view is your number one source of gospel music, videos and sermons. We are dedicated to bring you closer to God The Almighty, by listening to our most beloved songs sung by talented artists in the world</Text>
      </View>
      <View style={styles.aboutdeveloper}>
        <Text style={styles.aboutTxt}>About Developer</Text>
        <Text style={styles.font}>Kosam Omollo | FullStack developer | Associate Android Developer React Native</Text>
        <TouchableOpacity style={styles.callNumber} onPress={callNumber.bind(this, "0719418656")}>
          <Icon name="phone" size={20} color="red" />
          <Text style={styles.number}>0719418656</Text>
        </TouchableOpacity>
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
  logoWrapper: {
    width: "100%", 
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 120
  },
  aboutapp: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  aboutdeveloper: {
    paddingHorizontal: 20
  },
  font: {
    fontSize: 16
  },
  aboutTxt: {
    fontSize: 17,
    fontWeight: "bold"
  },
  callNumber: {
    paddingVertical: 20,
    flexDirection: "row"
  },
  number: {
    marginLeft: 10
  }
});

export default AboutUs;