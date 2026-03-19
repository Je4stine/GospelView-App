import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const AudioPlayer = () => {
  const { audioUrl, thumbnail } = useSelector(state => state.media.audio);
  const player = useAudioPlayer(audioUrl);

  useEffect(() => {
    return () => {
      if (player) {
        player.remove();
      }
    };
  }, []);

  const togglePlayback = () => {
    if (player.playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image style={styles.musicPlayer} source={require('../../assets/images/musicplayer.png')} resizeMode="contain" />
      </View>
      <View style={styles.player}>
        <View style={styles.thumbnailWrapper}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail }} resizeMode="contain" />
        </View>
        <View style={styles.controlsWrapper}>
          <TouchableOpacity>
            <MaterialIcons name="skip-previous" style={styles.iconFonts} />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayback}>
            { player.playing ? (
              <Feather name="pause-circle" style={styles.iconFonts} />)
              : (
              <Feather name="play-circle" style={styles.iconFonts} />)
            }
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="skip-next" style={styles.iconFonts} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffc0cb'
  },
  iconWrapper: {
    flex: .8,
    justifyContent: 'center',
    alignItems: "center",
    width: '100%'
  },
  musicPlayer: {
    width: '80%',
    height: '80%',
  },
  player: {
    flex: .2,
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: '#fe8daa'
  },
  thumbnailWrapper: {
    width: '40%',
    height: "100%",
    justifyContent: "center"
  },
  thumbnail: {
    width: 150,
    height: 120,
    borderRadius: 80
  },
  controlsWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "60%",
    height: "100%"
  },
  iconFonts: {
    fontSize: 35
  }
});

export default AudioPlayer;
