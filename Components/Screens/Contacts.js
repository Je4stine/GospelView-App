import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, Platform , Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const ContactUs  = ({ navigation }) => {
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

  const mailTo = () => {
    Linking.openURL('mailto:support@kosamtech.com?subject=Support')
  }

  return (
    <View style={styles.container}>
      <View style={styles.support}><Text style={styles.supportTxt}>Support</Text></View>
      <View style={styles.phoneWrapper}>
        <TouchableOpacity style={styles.phone} onPress={callNumber.bind(this, "0719418656")}>
          <Icon name="phone" size={20} style={styles.icons} />
          <Text>0719418656</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.phone} onPress={callNumber.bind(this, "0798355814")}>
          <Icon name="phone" size={20} style={styles.icons} />
          <Text>0798355814</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.emailWrapper} onPress={mailTo}>
        <Icon name="email" size={20} style={styles.icons} />
        <Text>kosamtech.com</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  support: { 
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    height: 60
  },
  supportTxt: {
    fontSize: 25,
    fontWeight: "bold"
  },
  phoneWrapper: { 
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 60
  },
  phone: {
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  icons: {
    paddingHorizontal: 10,
    color: "red"
  },
  emailWrapper: {
    flexDirection: "row", 
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 60
  }
});

export default ContactUs;