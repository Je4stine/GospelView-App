import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { loadDownloads, playCurAudio, playCurVideo } from '../../redux/actions/media';

const Downloads  = ({ navigation }) => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const getDownloads = async () => {
      setLoading(true);
      const downloadsRes = await dispatch(loadDownloads())
      setDownloads(current => downloadsRes)
      setLoading(false);
    }
    getDownloads();
  }, [dispatch]);
  
  const playDownloadVideo = media => {
    if (media) {
      dispatch(playCurVideo({videoUrl: media.mediaUrl, mediaId: media.mediaId}))
      navigation.navigate("VideoPlayerScreen")
    } else {
      return;
    }
  }

  const playDownloadAudio = media => {
    if (media) {
      dispatch(playCurAudio({audioUrl: media.mediaUrl, thumbnail: media.thumbnail, mediaId: media.mediaId}))
      navigation.navigate("AudioPlayerScreen")
    } else {
      return;
    }
  }


  const Download = ({ item, playDownloadVideo, playDownloadAudio }) => {
    const playMedia = (media) => {
      if (media.mediaType === "Video") {
        playDownloadVideo(media)
      } else {
        playDownloadAudio(media)
      }
    } 
    return (
      <View style={styles.musiccardContainer}>
        <TouchableOpacity onPress={playMedia.bind(this, item)}>
        <Image resizeMode="contain" style={styles.musiccard} source={{ uri: item.thumbnail}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.description}>
          <Text numberOfLines={4} ellipsizeMode="tail" style={styles.descriptionText}>
          {item.description ? item.description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.download}>
          {/* <Icon name="ellipsis-v" size={20} color="#1A1A1A" /> */}
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
    { loading ? (
      <View style={styles.loader}><ActivityIndicator size="large" color="red" /></View>
    ): (
      <View style={styles.container}>
        <View style={styles.downloads}>
          <FlatList
          data={downloads} 
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({item,}) => <Download item={item} playDownloadVideo={playDownloadVideo} playDownloadAudio={playDownloadAudio} />} />
        </View>
      </View>
    ) } 
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  musiccardContainer: {
    width: '100%', 
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15
  },
  musiccard: {
    width: 80,
    height: 80,
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
});

export default Downloads;