import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome5';

const AudioCard = ({item, playCurAudio, downloadAudio}) => {
  const [dowload, setDownload] = useState(false);
  const playAudio = (audio) => {
    playCurAudio(audio);
  }

  const toggleDownload = () => {
    setDownload(true)
  }

  const handleDownload = (media) => {
    downloadAudio(media)
  }

  return (
    <>
    <View style={styles.musiccardContainer}>
      <TouchableOpacity onPress={playAudio.bind(this, item)}>
        <Image resizeMode="contain" style={styles.musiccard} source={{ uri: item.thumbnail }} /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.description}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.descriptionText}>
        {item.description}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.download} onPress={toggleDownload}>
        { !dowload && <Icon name="ellipsis-v" size={20} color="#1A1A1A" />}
      </TouchableOpacity>
    </View>
    { dowload && <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload.bind(this, item)}><Text>Download</Text></TouchableOpacity>}
    </>
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
  },
  downloadBtn: {
    position: "absolute",
    right: 5,
    width: 80,
    height: 30,
    borderWidth: 1,
    bottom: 20,
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 5,
    zIndex: 100
  }
})

export default AudioCard;