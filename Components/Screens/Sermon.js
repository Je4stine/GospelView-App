import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import AudioCard from '../AudioCard';
import { playCurAudio, loadAudios } from '../../redux/actions/media';

const Sermon = ({ navigation }) => {
  const loading = useSelector(state => state.media.loading);
  const [audios, setAudios] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const audioRes = async () => {
      const audios = await dispatch(loadAudios());
      setAudios(audios)
    }
    audioRes();
  },[dispatch]);

  const favorites = audios.slice().filter(audio => audio.trending === true)
  const catholicAudios = audios.slice().filter(audio => audio.genre === "Catholic")
  const evangelicalAudios = audios.slice().filter(audio => audio.genre === "Evagelical")
  const sdaVideos = audios.slice().filter(audio => audio.genre === "SDA")

  const playAudio = (audio) => {
    if (audio) {
      dispatch(playCurAudio(audio));
      navigation.navigate("AudioPlayerScreen")
    }
  }

  return (
    <>
      { loading ? (
        <View style={styles.loader}><ActivityIndicator size="large" color="red" /></View>
      ): (
        <View style={styles.container}>
          <View style={styles.favoriteView}>
            <Text style={styles.favorite}>Fans Favorite</Text>
          </View>

          <View style={styles.favoriteAudioView}>
            <TouchableOpacity onPress={playAudio.bind(this, favorites[0])}>
              <Image resizeMode="contain" style={styles.favoriteAudios} source={favorites[0] ? { uri: favorites[0].thumbnail }: require('../../assets/images/IMG-20210329-WA0013.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={playAudio.bind(this, favorites[1])}>
              <Image resizeMode="contain" style={styles.favoriteAudios} source={ favorites[1] ? { uri: favorites[1].thumbnail }: require('../../assets/images/IMG-20210329-WA0017.jpg')} />
            </TouchableOpacity>
          </View>

          <View style={styles.popularVideosView}>
            <TouchableOpacity onPress={playAudio.bind(this, catholicAudios[0])}>
              <Text>Catholic</Text>
              <Image resizeMode="contain" style={styles.popularVideos} source={ catholicAudios[0] ? { uri: catholicAudios[0].thumbnail }: require('../../assets/images/IMG-20210329-WA0018.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={playAudio.bind(this, evangelicalAudios[0])}>
            <Text>Evangelical</Text>
              <Image resizeMode="contain" style={styles.popularVideos} source={ evangelicalAudios[0] ? { uri: evangelicalAudios[0].thumbnail }: require('../../assets/images/IMG-20210329-WA0013.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={playAudio.bind(this, sdaVideos[0])}>
              <Text>SDA</Text>
              <Image resizeMode="contain" style={styles.popularVideos} source={ sdaVideos[0] ? { uri: sdaVideos[0].thumbnail }: require('../../assets/images/IMG-20210329-WA0019.jpg')} />
            </TouchableOpacity>
          </View>

          <View style={styles.newMusicView}>
            <Text style={styles.newMusic}>Top the charts weekly</Text>
          </View>

          <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={audios}
          style={styles.newMusicContainer}
          renderItem={({ item }) => <AudioCard item={item} playCurAudio={playAudio} />}/>

        </View>
      ) }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  favoriteView: {
    width: '100%'
  },
  favorite: {
    fontSize: 15,
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  favoriteAudioView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  favoriteAudios: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  popularView: {
    width: '100%'
  },
  popular: {
    fontSize: 15,
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  popularVideosView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  popularVideos: {
    width: 90,
    height: 90,
    borderRadius: 10
  },
  newMusicView: {
    width: '100%'
  },
  newMusic: {
    fontSize: 15,
    paddingHorizontal: 20,
  },
  newMusicContainer: {
    width: '100%',
    paddingHorizontal: 20
  },
});

export default Sermon;
