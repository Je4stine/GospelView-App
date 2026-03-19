import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Button } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

const VideoPlayer = ({ navigation, route }) => {
  const { videoUrl } = useSelector(state => state.media.video);

  const player = useVideoPlayer(
    videoUrl || 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    (player) => {
      player.loop = true;
    }
  );

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        nativeControls={true}
        contentFit="contain"
      />
      <View style={styles.buttons}>
        <Button
          title={player.playing ? 'Pause' : 'Play'}
          onPress={() =>
            player.playing ? player.pause() : player.play()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    flex: 1,
    width: '100%',
    backgroundColor: '#111'
  },
  buttons: {
    display: 'none'
  }
})

export default VideoPlayer;
