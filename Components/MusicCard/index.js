import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MusicCard = ({ item }) => {
  return (
    <View style={styles.musiccardContainer}>
        <TouchableOpacity>
          <Image resizeMode="contain" style={styles.musiccard} source={item.thumbnail} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.description}>
          <Text numberOfLines={4} ellipsizeMode="tail" style={styles.descriptionText}>
          {item.description}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.download}>
          <Icon name="cloud-download" size={20} color="#BE0000" />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  musiccardContainer: {
    width: '100%', 
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 15
  },
  musiccard: {
    width: 70,
    height: 70,
    borderRadius: 15
  },
  description: {
    width: '65%',
    height: '100%', 
    paddingHorizontal: 8, 
  },
  descriptionText: {
    color: '#fff'
  },
  download: {
    alignItems: 'center',
    justifyContent: 'center', 
  }
});

export default MusicCard;