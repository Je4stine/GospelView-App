import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Video = () => {
  const audios = [
    {id: '1', thumbnail: require('../../assets/images/IMG-20210329-WA0021.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '2', thumbnail: require('../../assets/images/IMG-20210329-WA0023.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '3', thumbnail: require('../../assets/images/IMG-20210329-WA0024.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '4', thumbnail: require('../../assets/images/IMG-20210329-WA0020.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '5', thumbnail: require('../../assets/images/IMG-20210329-WA0020.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}> 

      <View style={styles.allNewView}>
        <TouchableOpacity>
          <Image resizeMode="contain" style={styles.allNewVideos} source={require('../../assets/images/IMG-20210329-WA0013.jpg')} />
        </TouchableOpacity>
      </View> 

      <View style={styles.catholicView}>
        <Text style={styles.catholic}>Catholic</Text>
      </View>

      <View style={styles.catholicVideosView}>
        <TouchableOpacity>  
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0018.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity> 
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0013.jpg')} /> 
        </TouchableOpacity> 
      </View>

      <View style={styles.evangelicalView}>
        <Text style={styles.evangelical}>Evangelical</Text>
      </View> 

      <View style={styles.evangelicalVideosView}>
        <TouchableOpacity>  
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0018.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity> 
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0013.jpg')} /> 
        </TouchableOpacity> 
        <TouchableOpacity> 
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0013.jpg')} /> 
        </TouchableOpacity> 
      </View>

      <View style={styles.sdaView}>
        <Text style={styles.sda}>SDA</Text>
      </View> 

      <View style={styles.sdaVideosView}>
        <TouchableOpacity>  
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0018.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity> 
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0013.jpg')} /> 
        </TouchableOpacity> 
        <TouchableOpacity> 
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0013.jpg')} /> 
        </TouchableOpacity> 
      </View>
      
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
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