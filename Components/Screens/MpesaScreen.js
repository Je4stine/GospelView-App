import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';

const MpesaTransaction = ({ navigation }) => {
  const [mpesaTransactionID, setMpesaTransactionID] = useState('');
  const { loading } = useSelector(state => state.payment);

  const NavigateToPayment = () => {
    navigation.navigate('Payment');
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
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>M-Pesa Transaction</Text>
          <Text style={styles.info}>Feature coming soon</Text>
          <TouchableOpacity style={styles.continueBtn} onPress={NavigateToPayment}>
            <Text style={styles.continueText}>Back to Payment</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  content: {
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
  info: {
    fontSize: 16,
    marginTop: 20,
    color: '#666'
  },
  continueBtn: {
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
