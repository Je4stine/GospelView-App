import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { playCurVideo, loadVideos } from '../../redux/actions/media';

const Video = ({ navigation }) => {
  const loading = useSelector(state => state.media.loading);
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const videoRes = async () => {
      const videos = await dispatch(loadVideos());
      setVideos(videos)
    }
    videoRes();
  }, [dispatch]);

  const allNewVideos = videos.slice().sort((a, b) => b.createdAt - a.createdAt);
  const catholicVideos = videos.slice().filter(video => video.genre === "Catholic");
  const evangelicalVideos = videos.slice().filter(video => video.genre === "Evagelical");
  const sdaVideos = videos.slice().filter(video => video.genre === "SDA");

  const playVideo = (video) => {
    if (video) {
      dispatch(playCurVideo(video));
      navigation.navigate("VideoPlayerScreen");
    }
  }

  return (
    <>
    { loading ? (
      <View style={styles.loader}>
      <ActivityIndicator size="large" color="red" />
    </View>
    ): (
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.allNewView}>
          <TouchableOpacity onPress={playVideo.bind(this, allNewVideos[0])}>
            <Image resizeMode="contain" style={styles.allNewVideos} source={ allNewVideos[0] ? {uri: allNewVideos[0].thumbnail} : require('../../assets/images/IMG-20210329-WA0013.jpg') } />
          </TouchableOpacity>
        </View>

        <View style={styles.catholicView}>
          <Text style={styles.catholic}>Catholic</Text>
        </View>

        <View style={styles.catholicVideosView}>
          <TouchableOpacity onPress={playVideo.bind(this, catholicVideos[0])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ catholicVideos[0] ? { uri: catholicVideos[0].thumbnail }: require('../../assets/images/IMG-20210329-WA0018.jpg') } />
          </TouchableOpacity>
          <TouchableOpacity onPress={playVideo.bind(this, catholicVideos[1])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ catholicVideos[1] ? { uri: catholicVideos[1].thumbnail }: require('../../assets/images/IMG-20210329-WA0013.jpg') } />
          </TouchableOpacity>
        </View>

        <View style={styles.evangelicalView}>
          <Text style={styles.evangelical}>Evangelical</Text>
        </View>

        <View style={styles.evangelicalVideosView}>
          <TouchableOpacity onPress={playVideo.bind(this, evangelicalVideos[0])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ evangelicalVideos[0] ? { uri: evangelicalVideos[0].thumbnail }: require('../../assets/images/IMG-20210329-WA0018.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={playVideo.bind(this, evangelicalVideos[1])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ evangelicalVideos[1] ? { uri: evangelicalVideos[1].thumbnail }: require('../../assets/images/IMG-20210329-WA0013.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={playVideo.bind(this, evangelicalVideos[2])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ evangelicalVideos[2] ? { uri: evangelicalVideos[2].thumbnail }: require('../../assets/images/IMG-20210329-WA0013.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.sdaView}>
          <Text style={styles.sda}>SDA</Text>
        </View>

        <View style={styles.sdaVideosView}>
          <TouchableOpacity onPress={playVideo.bind(this, sdaVideos[0])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ sdaVideos[0] ? { uri: sdaVideos[0].thumbnail }: require('../../assets/images/IMG-20210329-WA0018.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={playVideo.bind(this, sdaVideos[1])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ sdaVideos[1] ? { uri: sdaVideos[1].thumbnail }: require('../../assets/images/IMG-20210329-WA0013.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={playVideo.bind(this, sdaVideos[2])}>
            <Image resizeMode="contain" style={styles.popularVideos} source={ sdaVideos[2] ? { uri: sdaVideos[2].thumbnail }: require('../../assets/images/IMG-20210329-WA0013.jpg')} />
          </TouchableOpacity>
        </View>

      </ScrollView>
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
    alignItems: "center",
    justifyContent: "center"
  },
  allNewView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  allNewVideos: {
    width: 400,
    height: 220,
    borderRadius: 10
  },
  popularView: {
    width: '100%'
  },
  popular: {
    fontSize: 15,
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  catholicVideosView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  popularVideos: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  catholicView: {
    width: '100%'
  },
  catholic: {
    fontSize: 15,
    paddingHorizontal: 20,
  },
  evangelicalView: {
    width: '100%'
  },
  evangelical: {
    fontSize: 15,
    paddingHorizontal: 20,
  },
  evangelicalVideosView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  sdaView: {
    width: '100%'
  },
  sda: {
    fontSize: 15,
    paddingHorizontal: 20,
  },
  sdaVideosView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  newMusicContainer: {
    width: '100%',
    paddingHorizontal: 20
  },
});

export default Video;
