import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Platform, ToastAndroid, Alert, ActivityIndicator } from 'react-native';
import VideoCard from '../MusicCard';
import { playCurVideo, loadVideos, downloadVideoMedia } from '../../redux/actions/media';

const Home = ({ navigation }) => {
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

  const trending = videos.slice().filter(video => video.trending === true);
  const popular = videos.slice().filter(video => video.popular === true);

  const playVideo = (video) => {
    dispatch(playCurVideo(video));
    navigation.navigate("VideoPlayerScreen");
  }

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

  const downloadVideo = async video => {
    const videosCp = videos.slice();
    const videoIndex = videosCp.findIndex(videocp => videocp._id === video._id);
    let item = {...videosCp[videoIndex]};
    item.download = true;
    videosCp[videoIndex] = item;
    await dispatch(downloadVideoMedia(video))
    setVideos(videosCp);
    showNotification('Video downloaded');
  }

  return (
    <>
      { loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
          <View style={styles.container}>
            <View style={styles.trendingView}>
            <Text style={styles.trending}>Trending</Text>
            </View>

            <View style={styles.trendingVideosView}>
              <TouchableOpacity onPress={playVideo.bind(this, trending[0])}>
                <Image resizeMode="contain" style={styles.trendingVideos} source={require('../../assets/images/IMG-20210329-WA0019.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={playVideo.bind(this, trending[1])}>
                <Image resizeMode="contain" style={styles.trendingVideos} source={require('../../assets/images/IMG-20210329-WA0017.jpg')} />
              </TouchableOpacity>
            </View>

            <View style={styles.popularView}>
              <Text style={styles.popular}>Popular</Text>
            </View>

            <View style={styles.popularVideosView}>
              <TouchableOpacity onPress={playVideo.bind(this, popular[0])}>
                <Image resizeMode="contain" style={styles.popularVideos} source={ popular[0] ? { uri: popular[0].thumbnail} : require('../../assets/images/IMG-20210329-WA0018.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={playVideo.bind(this, popular[1])}>
                <Image resizeMode="contain" style={styles.popularVideos} source={popular[1] ? { uri: popular[1].thumbnail} : require('../../assets/images/IMG-20210329-WA0018.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={playVideo.bind(this, popular[2])}>
                <Image resizeMode="contain" style={styles.popularVideos} source={popular[2] ? { uri: popular[2].thumbnail} : require('../../assets/images/IMG-20210329-WA0018.jpg')} />
              </TouchableOpacity>
            </View>

            <View style={styles.newMusicView}>
              <Text style={styles.newMusic}>New Music</Text>
            </View>

            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={videos}
            style={styles.newMusicContainer}
            renderItem={({item}) => <VideoCard item={item} playCurVideo={playVideo} downloadVideo={downloadVideo} />}/>

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
  trendingView: {
    width: '100%'
  },
  trending: {
    fontSize: 15,
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  trendingVideosView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  trendingVideos: {
    width: 150,
    height: 150,
    borderRadius: 40
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
    fontWeight: "bold"
  },
  newMusicContainer: {
    width: '100%',
    paddingHorizontal: 20
  },
});
export default Home;
