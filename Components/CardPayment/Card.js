import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Card = (props) => {
  const [name, onNameChange] = useState('');
  const [cardNumber, onCardNumberChange] = useState('');
  const [expiry, onExpiryChange] = useState('');
  const [cvc, onCvcChange] = useState('');

  const initiateCardPayment = () => {
    if (name.trim() === '' || cardNumber.trim() === '' || expiry.trim() === '' || cvc.trim() === '') {
      return;
    }
    const data = {
      name,
      cardNumber,
      expiry,
      cvc
    };
    props.handlePayment({...data, amount: 500, method: 'Credit/Debit Card'})
    onNameChange('');
    onCardNumberChange('');
    onExpiryChange('');
    onCvcChange('');
    props.showCard(false);
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.heading}>
        <Text style={styles.carddetail}>Card details</Text>
        <FontAwesome name="cc-visa" size={20} color="#900" />
        <FontAwesome name="paypal" size={20} color="#900" />
        <FontAwesome name="cc-mastercard" size={20} color="#900" />
      </View>
      <View style={styles.nameOnCard}>
        <TextInput
         style={styles.text}
         value={name}
         onChangeText={onNameChange}
         placeholder="Name on Card" />
      </View>
      <View style={styles.cardNumber}>
        <TextInput
         style={styles.text}
         value={cardNumber}
         onChangeText={onCardNumberChange}
         keyboardType="numeric"
         placeholder="Card Number" />
      </View>
      <View style={styles.expiry}>
        <TextInput
         style={styles.text}
         value={expiry}
         onChangeText={onExpiryChange}
         maxLength={5}
         placeholder="Valid Till (MM/YY)" />
      </View>
      <View style={styles.cvcNumber}>
        <TextInput
         style={styles.text}
         maxLength={3}
         value={cvc}
         onChangeText={onCvcChange}
         keyboardType="numeric"
         placeholder="cvc" />
      </View>
      <View style={styles.payBtnView}>
      <TouchableOpacity style={styles.payBtn} onPress={initiateCardPayment}>
        <Text style={styles.btnText}>PAY</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 280,
    height: 200,
    position: 'absolute',
    bottom: 45,
    right: 13,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    zIndex: 1000
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
    paddingVertical: 3
  },
  carddetail: {
    fontSize: 14
  },
  nameOnCard: {
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginBottom: 5,
  },
  cardNumber: {
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginBottom: 5
  },
  expiry: {
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginBottom: 5
  },
  cvcNumber: {
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginBottom: 5
  },
  text: {
    fontSize: 10,
    height: 25
  },
  payBtnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 8,
  },
  payBtn: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BE0000',
    borderRadius: 5,
    paddingVertical: 5
  },
  btnText: {
    color: '#fff'
  }
});

export default Card;
