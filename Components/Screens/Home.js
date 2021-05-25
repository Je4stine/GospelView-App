import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList,} from 'react-native';  
import MusicCard from '../MusicCard';


const Home = () => {
  const musics = [
    {id: '1', thumbnail: require('../../assets/images/IMG-20210329-WA0009.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '2', thumbnail: require('../../assets/images/IMG-20210329-WA0013.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '3', thumbnail: require('../../assets/images/IMG-20210329-WA0010.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '4', thumbnail: require('../../assets/images/IMG-20210329-WA0020.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {id: '5', thumbnail: require('../../assets/images/IMG-20210329-WA0020.jpg'), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.trendingView}>
        <Text style={styles.trending}>Trending</Text>
      </View>

      <View style={styles.trendingVideosView}>
        <TouchableOpacity>
          <Image resizeMode="contain" style={styles.trendingVideos} source={require('../../assets/images/IMG-20210329-WA0019.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode="contain" style={styles.trendingVideos} source={require('../../assets/images/IMG-20210329-WA0017.jpg')} />
        </TouchableOpacity> 
      </View>

      <View style={styles.popularView}>
        <Text style={styles.popular}>Popular</Text>
      </View>

      <View style={styles.popularVideosView}>
        <TouchableOpacity> 
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0018.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0022.jpg')} /> 
        </TouchableOpacity>
        <TouchableOpacity> 
          <Image resizeMode="contain" style={styles.popularVideos} source={require('../../assets/images/IMG-20210329-WA0015.jpg')} />
        </TouchableOpacity>
      </View>

      <View style={styles.newMusicView}>
        <Text style={styles.newMusic}>New Music</Text>
      </View>

      <FlatList
      keyExtractor={(item, id) => item.id} 
      data={musics} 
      style={styles.newMusicContainer}
      renderItem={MusicCard}/> 
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
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