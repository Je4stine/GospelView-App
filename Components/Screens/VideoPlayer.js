import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoPlayer  = ({ navigation, route }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const {  videoUrl } = useSelector(state => state.media.video); 

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: `${videoUrl ? videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}`,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  video: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#111'
  },
  buttons: {
    display: "none"
  }
})

export default VideoPlayer;
