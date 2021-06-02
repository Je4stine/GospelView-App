import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import NextIcon from 'react-native-vector-icons/MaterialIcons';


const AudioPlayer = () => {
  const [sound, setSound] = React.useState();
  const [playing, setPlaying] = React.useState(false);
  console.log({playing})
  const { audioUrl, thumbnail } = useSelector(state => state.media.audio);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({ uri: audioUrl }
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    setPlaying(true);
  }

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setPlaying(false);
      console.log("sound paused")
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); setPlaying(false); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
    <View style={styles.iconWrapper}>
      <Image style={styles.musicPlayer} source={require('../../assets/images/musicplayer.png')} resizeMode="contain" />
    </View>
      <View style={styles.player}>
        <View style={styles.thumbnailWrapper}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail}} resizeMode="contain" />
        </View>
        <View style={styles.controlsWrapper}>
          <TouchableOpacity>
            <NextIcon name="skip-previous" style={styles.iconFonts} />
          </TouchableOpacity>
          <TouchableOpacity>
            { playing ? (
              <Icon name="pause-circle" onPress={pauseSound}  style={styles.iconFonts} />) 
              : (
              <Icon name="play-circle" onPress={playSound} style={styles.iconFonts} />)  
            }
          </TouchableOpacity>
          <TouchableOpacity>
            <NextIcon name="skip-next" style={styles.iconFonts} /> 
          </TouchableOpacity>
        </View>
        {/* <Button title="Play Sound" onPress={playSound} /> */}
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
    flex: 1,
    flex: .8,
    justifyContent: 'center',
    alignItems: "center", 
    width: '100%'
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

export default AudioPlayer