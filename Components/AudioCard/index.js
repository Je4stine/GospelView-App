import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome5';

const AudioCard = ({item}) => {
  return (
    <View style={styles.musiccardContainer}>
      <TouchableOpacity>
        <Image resizeMode="contain" style={styles.musiccard} source={item.thumbnail} /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.description}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.descriptionText}>
        {item.description}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.download}>
        <Icon name="ellipsis-v" size={20} color="#1A1A1A" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  musiccardContainer: {
    width: '100%', 
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15
  },
  musiccard: {
    width: 55,
    height: 55,
    borderRadius: 15
  },
  description: {
    width: '65%',
    height: '100%', 
    paddingHorizontal:20
  },
  descriptionText: {
    color: '#1A1A1A'
  },
  download: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end', 
    alignSelf: 'center',
    width: '12%'
  }
})

export default AudioCard;