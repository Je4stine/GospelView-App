import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity, Platform, ToastAndroid, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { uploadUserAvatar } from '../../redux/actions/auth';

const Account = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const profile = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled) {
      return;
    }
    setImage({ localUri: pickerResult.assets[0].uri });
  };

  const showNotification = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravityAndOffset(
        msg,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } else {
      Alert.alert('Info', msg);
    }
  }

  const uploadUserAvatarAsync = async (selectedImage) => {
    const success = await uploadUserAvatar(selectedImage, token)
    if (success) {
      showNotification("Upload success")
    } else {
      showNotification("Upload failed")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar.Image source={{ uri: profile.avatar ? profile.avatar : 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} size={150} />
      </View>
      <View style={styles.change}>
        { image ? (
          <TouchableOpacity onPress={uploadUserAvatarAsync.bind(this, image)} style={styles.changeBtn}>
          <Text style={styles.btnText}>Upload</Text>
        </TouchableOpacity>
        ): (
          <TouchableOpacity onPress={() => showNotification("feature coming soon")} style={styles.changeBtn}>
            <Text style={styles.btnText}>Change Avatar</Text>
            <Icon name="pencil" size={25} color="#fff" />
          </TouchableOpacity>
        ) }

      </View>
      <View style={styles.userInfo}>
        <View><Text style={styles.detail}>Name: {profile.name}</Text></View>
        <View><Text style={styles.detail}>Email: {profile.email}</Text></View>
        <View><Text style={styles.detail}>Phone: {profile.phone}</Text></View>
        <View><Text style={styles.detail}>Status: {profile.status ? "Active": "Inactive"}</Text></View>
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
  avatar: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  change: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  changeBtn: {
    backgroundColor: "#0275d8",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 5
  },
  btnText: {
    color: "#fff",
    marginRight: 5
  },
  userInfo: {
    flex: 1
  },
  detail: {
    fontSize: 16
  }
});

export default Account;
