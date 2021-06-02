import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import AuthHeader from '../Auth/AuthHeader';
import { register } from '../../redux/actions/auth';


const RegisterScreen = ({navigation}) => {
  const [firstName, onFirstNameChange] = useState('');
  const [lastName, onLastNameChange] = useState('');
  const [email, onEmailChange] = useState('');
  const [phoneNumber, onPhoneChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [password2, onPassword2Change] = useState(''); 
  const { loading } = useSelector(state => state.auth); 
  const dispatch = useDispatch();

  const handleRegister = async () => {
    if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || password.trim() === "" || password2.trim() === "") {
      return;
    }
    if (password !== password2) {
      Alert.alert('Password', 'Passwords do not match', [{ text: 'Ok', }])
      return;
    }
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    }
    const userRegisterResponse = await dispatch(register(data));
    if (userRegisterResponse.response) { 
      Alert.alert('Success', `${userRegisterResponse.msg}`, [{ text: 'Ok', }, { text: "Sign In", onPress: ()=>{navigation.navigate('SignIn')} }]);
    } else {
      Alert.alert('Bad Request', `${userRegisterResponse.msg}`, [{ text: 'Ok', }]);
    }
  } 

  return (
    <ImageBackground style={styles.background} source={require('../../assets/images/IMG-20210329-WA0007.jpg')} >
      <AuthHeader /> 
      <View style={styles.signupContainer}>
        <View style={styles.nameView}> 
          <TextInput
           placeholderTextColor="#fff"  
           value={firstName}
           placeholder="First Name"
           onChangeText={onFirstNameChange}
           style={styles.nameInput} />
        </View>
        <View style={styles.nameView}> 
          <TextInput
           placeholderTextColor="#fff"  
           value={lastName}
           placeholder="Last Name"
           onChangeText={onLastNameChange}
           style={styles.nameInput} />
        </View>
        <View style={styles.emaiView}> 
          <TextInput
           placeholderTextColor="#fff"  
           value={email}
           placeholder="someone@example.com"
           onChangeText={onEmailChange}
           style={styles.emailInput} />
        </View>
        <View style={styles.phoneView}>
          <Text style={styles.phonelabel}>KE+254</Text>
          <TextInput
           placeholderTextColor="#fff"
           keyboardType="numeric" 
           value={phoneNumber}
           onChangeText={onPhoneChange}
           maxLength={10}
           style={styles.phoneInput} 
           placeholder="Phone Number"></TextInput>
        </View>
        <View style={styles.passwordView}> 
          <TextInput
           placeholderTextColor="#fff" 
           value={password}
           onChangeText={onPasswordChange}
           secureTextEntry={true}
           style={styles.passwordInput} 
           placeholder="Password (6-16 alphanumerics)"></TextInput>
        </View>
        <View style={styles.passwordView}> 
          <TextInput
           placeholderTextColor="#fff" 
           value={password2}
           onChangeText={onPassword2Change}
           secureTextEntry={true}
           style={styles.passwordInput} 
           placeholder="Confirm Password (6-16 alphanumerics)"></TextInput>
        </View>
        <View style={styles.signInActions}>
          { loading ? <ActivityIndicator size="large" color="#fff" /> : (
            <TouchableOpacity style={styles.signupBtn} onPress={handleRegister}>
            <Text style={styles.white}>Sign Up</Text> 
          </TouchableOpacity>
          ) }
          <TouchableOpacity style={styles.signinBtn} onPress={() => navigation.push('SignIn')}>
            <Text style={styles.white}>Sign In</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'nunito'
  },
  signupContainer: { 
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameView: {
    borderColor: '#BE0000',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15
  },
  nameInput:{
    color: '#fff',
    width: '100%'
  },
  emaiView: {
    borderColor: '#BE0000',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15
  },
  emailInput: {
    color: '#fff',
    width: '100%'
  },
  phoneView: {
    borderColor: '#BE0000',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15
  },
  phoneInput: {
    color: '#fff',
    width: 200,
  },
  passwordView: {
    borderColor: '#BE0000',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',  
    alignItems: 'center',
    padding: 10,
    marginBottom: 15
  },
  passwordInput: {
    color: '#fff'
  },
  phonelabel: {
    color: '#BE0000',
    marginRight: 15,
  },
  phoneemailInput: {
    color: '#fff',
    width: 200,
  },
  signInActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    width: '80%'
  },
  signupBtn: {
    backgroundColor: '#BE0000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  signinBtn: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BE0000',
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  white: {
    color: '#fff'
  },
  forgotPass: {
    alignItems:  'flex-start',
    width: '80%'
  }
});

export default RegisterScreen;