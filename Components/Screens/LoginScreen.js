import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground, TextInput, Switch, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import AuthHeader from '../Auth/AuthHeader';
import { login } from '../../redux/actions/auth';

const LoginScreen = ({navigation}) => {
  const [emailphone, onEmailPhoneChange] = useState('');
  const [password, onPasswordChange] = useState('')
  const [showPassword, setShowPassword] = useState(true);
  const { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    setShowPassword(!showPassword);
  }

  const handleSignIn = async () => {
    if (emailphone.trim() === "" || password.trim() === "") {
      return;
    }
    const data = {
      emailphone,
      password
    }
    const userSignedIn = await dispatch(login(data));
    if (userSignedIn) {
      navigation.navigate('PackageScreen');
    } else {
      Alert.alert('Unauthorized', 'Invalid email/phone or password ', [{ text: 'Ok' }]);
    }
  }

  return (
    <ImageBackground style={styles.background} source={require('../../assets/images/IMG-20210329-WA0007.jpg')} >
      <AuthHeader />
      <View style={styles.loginContainer}>
        <View style={styles.phoneemailView}>
          <Text style={styles.phonelabel}>KE+254</Text>
          <TextInput
           placeholderTextColor="#fff"
           style={styles.phoneemailInput}
           value={emailphone}
           onChangeText={onEmailPhoneChange}
           placeholder="Phone number/email"></TextInput>
        </View>
        <View style={styles.password}>
          <TextInput
           placeholderTextColor="#fff"
           secureTextEntry={showPassword}
           value={password}
           onChangeText={onPasswordChange}
           style={styles.phoneemailInput}
           placeholder="Password (6-16 alphanumerics)"></TextInput>
          <Switch
            onValueChange={toggleSwitch}
            value={showPassword}
            />
        </View>
        <View style={styles.signInActions}>
          { loading ? <ActivityIndicator size="small" color="#fff" /> : (
            <TouchableOpacity style={styles.signinBtn} onPress={handleSignIn}>
            <Text style={styles.white}>Sign In</Text>
          </TouchableOpacity>
          ) }
          <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.push('SignUp')}>
            <Text style={styles.white}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotPass}>
          <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password reset coming soon')}>
          <Text style={styles.white}>Forgot Password?</Text>
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
  },
  loginContainer: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneemailView: {
    borderColor: '#BE0000',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  password: {
    borderColor: '#BE0000',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15
  },
  phonelabel: {
    color: '#BE0000',
    marginRight: 15,
  },
  phoneemailInput: {
    color: '#fff',
    width: 200,
    flex: 1,
    height: '100%'
  },
  signInActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    width: '80%'
  },
  signinBtn: {
    backgroundColor: '#BE0000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  signupBtn: {
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
    alignItems: 'flex-start',
    width: '80%'
  }
});

export default LoginScreen;
