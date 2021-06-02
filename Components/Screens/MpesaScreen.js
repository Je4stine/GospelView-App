import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, ActivityIndicator, ToastAndroid, Alert} from 'react-native';

const MpesaTransaction = ({ navigation }) => {
  const [mpesaTransactionID, setMpesaTransactionID] = useState('');
  const { loading } =  useSelector(state => state.payment); 
  // const dispatch = useDispatch(); 

  const NavigateToHomeScreen = () => {
    if (choosePackage === null || choosePackage === undefined) { 
      Alert.alert('Invalid Choice', 'Please select a package before we continue', [{ text: 'OK' }])
    } else {
      navigation.navigate('Payment');
    }
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
      </SafeAreaView>
      { loading ? (
        <View style={{justifyContent: 'center', alignItems:"center"}}>
          <ActivityIndicator size="large" />
        </View>
      ) :  (
        <View style={styles.choosePackage}> 
          <View><Text style={styles.title}>Choose Your Package</Text></View>

          <TouchableOpacity style={styles.basic} onPress={handlePackageChange.bind(this, 'Basic')}>
            <View style={styles.ellipseView}>
              <TouchableOpacity style={styles.ellipseBasic}>
                <Text style={styles.packageTitle}>Basic</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pricingView}>
              <View style={styles.priceView}>
                <View>
                  <Text>Monthly</Text> 
                  <Text>Ksh 300</Text>
                </View>
                <View>
                  <Text>Annually</Text> 
                  <Text>Ksh 3600</Text>
                </View>
              </View>
              <View>
                <Text>Reduces number of videos access Standard definition video quality</Text>
              </View>
              <View>
                <Text>1 device</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.standard} onPress={handlePackageChange.bind(this, 'Standard')}>
            <View style={styles.ellipseView}>
              <TouchableOpacity style={styles.ellipseStandard}>
                <Text style={styles.packageTitle}>Standard</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pricingView}>
              <View style={styles.priceView}>
                <View>
                  <Text>Monthly</Text> 
                  <Text>Ksh 500</Text>
                </View>
                <View>
                  <Text>Annually</Text> 
                  <Text>Ksh 6000</Text>
                </View>
              </View>
              <View>
                <Text>Relatively high number of video access High definition video quality</Text>
              </View>
              <View>
                <Text>2 devices</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.premium} onPress={handlePackageChange.bind(this, 'Premium')}>
            <View style={styles.ellipseView}>
              <TouchableOpacity style={styles.ellipsePremium}>
                <Text style={styles.packageTitle}>Premium</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pricingView}>
              <View style={styles.priceView}>
                <View>
                  <Text>Monthly</Text> 
                  <Text>Ksh 800</Text>
                </View>
                <View>
                  <Text>Annually</Text> 
                  <Text>Ksh 9600</Text>
                </View>
              </View>
              <View>
                <Text>Unlimited video access Ultra high definition videoo quality</Text>
              </View>
              <View>
                <Text>4 devices</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.continue} onPress={NavigateToHomeScreen}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  container:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4'
  },
  logoContainer: { 
    width: '100%', 
    alignItems: 'center',
    alignSelf: 'flex-start', 
    position: 'absolute',
    top: 20,
  },
  logo: {
    width: 80,
    height: 80
  },
  logoView: {
    flex: 1,
    justifyContent: 'center'
  },
  choosePackage:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 80
  },
  title: { 
    fontSize: 21,
    letterSpacing: 1,
    color: '#BE0000'
  },
  basic: {
    flexDirection: 'row',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 10, 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  standard: {
    flexDirection: 'row',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 10, 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  premium: {
    flexDirection: 'row',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 10, 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  ellipseView: {
    marginRight: 5,
    justifyContent: 'center'
  },
  ellipseBasic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4c4c',
  },
  ellipseStandard: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BE0000',
  },
  ellipsePremium: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4c4c',
  },
  packageTitle: {
    color: '#fff',
  },
  pricingView: {
    paddingHorizontal: 10, 
    width: '80%'
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    borderBottomWidth: 0.5
  },
  continue: {
    marginTop: 30,
    backgroundColor: '#BE0000',
    paddingHorizontal: 50,
    paddingVertical: 13,
    borderRadius: 20
  },
  continueText: {
    color: '#fff',
    textTransform: 'uppercase'
  }
});

export default MpesaTransaction;