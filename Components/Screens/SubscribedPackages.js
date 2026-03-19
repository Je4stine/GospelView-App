import React from 'react';
import { View, StyleSheet, Text, Button, Platform, ToastAndroid, Alert } from 'react-native';
import { useSelector } from 'react-redux';

const Subscription = ({ navigation }) => {
  const packageType = useSelector(state => state.packages.package);

  const showNotification = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravityAndOffset(
        'Feature coming soon',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } else {
      Alert.alert('Info', 'Feature coming soon');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.current}>
        <Text style={styles.currentTxt}>Current Subscription Plan</Text>
      </View>
      <View style={styles.nameWrapper}>
        <View style={styles.packageName}><Text style={styles.packageNameTxt}>{packageType.name}</Text></View>
      </View>
      <View style={styles.description}>
        <View style={styles.pricing}>
          <View style={styles.monthly}>
            <Text style={styles.monthlyTxt}>Monthly</Text>
            <Text style={styles.amount}>Ksh {packageType.monthlyPrice}</Text>
          </View>
          <View style={styles.annually}>
            <Text style={styles.annuallyTxt}>Annually</Text>
            <Text style={styles.amount}>Ksh {packageType.annualPrice}</Text>
          </View>
        </View>
        <View style={styles.limits}>
          <View>
            <Text style={styles.limitTxt}>{packageType.descriprion}</Text>
            <Text style={styles.limitTxt}>{packageType.numberOfDevices} devices</Text>
          </View>
        </View>
      </View>
      <View style={styles.upgrade}>
        <Button title="Upgrade" color="red" onPress={showNotification} />
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
  current: {
    width: '100%',
    justifyContent:"center",
    alignItems: "center",
    height: 50
  },
  currentTxt: {
    fontSize: 18,
    fontWeight: "bold"
  },
  nameWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 130
  },
  packageName: {
    borderWidth: .2,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  packageNameTxt: {
    fontWeight: "bold",
    color: "#fff"
  },
  description: {
    width: "100%",
  },
  pricing: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50
  },
  monthlyTxt: {
    fontSize: 16,
    color: "red"
  },
  annuallyTxt: {
    fontSize: 16,
    color: "red"
  },
  amount: {
    fontSize: 16
  },
  limits: {
    width: "100%",
    paddingHorizontal: 80
  },
  limitTxt: {
    fontSize: 16
  },
  upgrade: {
    paddingVertical: 30
  }
});

export default Subscription;
