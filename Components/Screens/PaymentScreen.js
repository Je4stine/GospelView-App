import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View , ScrollView, Image, SafeAreaView, TouchableOpacity, Text, Alert, ToastAndroid} from 'react-native'; 
import CardPayment from '../CardPayment/Card';


const PaymentScreen = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showCardView, setShowCardView] = useState(false);
  const packageType = useSelector(state => state.packages.package);
  const handleCardView = (payment) => {
    setSelectedPayment(payment);
    setShowCardView(!showCardView);
    showToastWithGravityAndOffset("Card payment with paypal")
  }

  const showToastWithGravityAndOffset = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      `${msg}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  const handleSelectedPayment = payment => {
    setSelectedPayment(payment);
    if (payment.method === "Mpesa" || payment.method === "Airtel") {
      showToastWithGravityAndOffset("Feature coming soon")
    }
  }

  const handleNavigateToHome = () => {
    if (!selectedPayment) return;
    navigation.navigate("HomeScreen");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
      </SafeAreaView>
      <View style={styles.paymentContainer}>
        <View style={[styles.wrapper], styles.noborder}>
          <View style={styles.packageContainer}>
            <Text style={styles.packageType}>{packageType.name} Package</Text>
            <Text style={styles.packageType}>Monthly</Text>
          </View>
        </View>
        <View style={[styles.wrapper], styles.noborder}>
          <View style={styles.paymentMethod}>
            <Text style={styles.method}>Payment Method</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.paymentLogo} onPress={handleSelectedPayment.bind(this, {method: 'Mpesa', amount: packageType.monthlyPrice})}>
            <Image resizeMode="contain" style={styles.mpesalogo} source={require('../../assets/images/mpesalogo.png')} />
            <Text>|   Ksh {packageType.monthlyPrice}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.paymentLogo} onPress={handleSelectedPayment.bind(this, {method: 'Airtel', amount: packageType.monthlyPrice})}>
            <Image resizeMode="contain" style={styles.mpesalogo} source={require('../../assets/images/airtellogo_prev_ui.png')} />
            <Text>|   Ksh {packageType.monthlyPrice}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.cardPayment} onPress={handleCardView.bind(this, {method: "Card", amount: packageType.monthlyPrice})}>
            <View style={styles.innerBorder}>
              <Text>Credit / Debit Card</Text>
              <Text>|   Ksh {packageType.monthlyPrice}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {showCardView && <CardPayment showCard={handleCardView} handlePayment={handleSelectedPayment} />}
        <View style={styles.continueView}> 
          <TouchableOpacity style={styles.continueBtn} onPress={handleNavigateToHome}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
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
  paymentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20, 
  },
  wrapper: {
    width: '100%',
    paddingVertical: 15,
    borderTopWidth: 0.5,
    marginTop: 5
  },
  noborder: {
    borderWidth: 0,
    width: '100%'
  },
  packageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 50
  },
  packageType: {
    color: '#BE0000',
    fontSize: 18
  },
  package: {
    flexDirection: 'row'
  },
  paymentMethod: {
    alignItems: 'flex-start', 
    width: '100%',
    paddingHorizontal: 20,
  },
  method: {
    fontSize: 18,
    paddingVertical: 10
  },
  paymentLogo: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    backgroundColor: '#fff'
  },
  mpesalogo: {
    width: 60,
    height: 60
  },
  cardPayment: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    backgroundColor: '#fff',
    borderWidth: 0.5
  },
  innerBorder: {
    borderWidth: 0.5,
    borderRadius: 5, 
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  continueView: {
    width: '100%', 
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  continueBtn: {
    backgroundColor: '#BE0000',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    borderRadius: 5
  },
  continueText: {
    color: '#fff',
    textTransform: 'uppercase'
  }
})

export default PaymentScreen;