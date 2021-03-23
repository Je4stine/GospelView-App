import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from 'react-navigation';
import {Image} from 'react-native';


function Home() {
  return (
    <View style={{flex:1,}}>
      <Image
      style= {{flex:1, height:20, width: 370, resizeMode: "cover", 
      borderRadius: 30, borderWidth:5, borderColor:"#dddddd", flexDirection:"column"}}
       source= {require('../assets/homepage2.jpeg')} />
      <View
        style={{
          flex:1,
          resizeMode:'contain',   
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row"
            
          }}
        >
          <View>
            <Text style={styles.title}> Popular </Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

  item: {
    height: 50,
    borderStyle: "solid",
    borderBottomColor: "gray"
  },
  title: {
      fontSize: 27,
      paddingLeft: 6,
      paddingTop: 4,
      shadowOpacity: 0,
      fontWeight: 'bold',
  }
});
export default Home;