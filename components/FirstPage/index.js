import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <ImageBackground 
      source={require('../../assets/bgPictures/wallpaperbmw.jpg')} 
      resizeMode='cover' 
      style={styles.imgBackground} 
      blurRadius={8}/>
       
      
      <View style={styles.welcomeView}> 
       <Text style={styles.welcomeText}>W E L C O M E</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <View style={styles.bmwLogoView}>
        <Image style={styles.bmwLogo} source={require ('../../assets/bgPictures/bmwlogosecond.png')} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonPressable} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>DEMO LOGIN</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeView:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:100
  },
  welcomeText:{
    fontSize:40,
    fontWeight:'bold',
    color:'white',
    textShadowColor:'white',
    textShadowRadius:5
  },
  bmwLogoView:{
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:200,
  },
  bmwLogo:{
    width:170,
    height:170,

  },
  videoView:{
    width:410,
    height:820,
  },
  buttonPressable:{
    width:'80%',
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:1,
    bottom:100,
    position:'absolute',
    borderRadius:100,
    borderColor:'white'
  },
  buttonText:{
    fontSize:27,
    fontWeight:'bold',
    color:'white',
  },
  imgBackground:{
    width:'100%',
    height:'100%',
    position:'absolute',
  }
});

export default FirstPage;