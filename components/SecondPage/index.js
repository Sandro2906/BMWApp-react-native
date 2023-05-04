import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecondPage = () => {

  const LinkBmwI7 = () => {
    Linking.openURL('https://www.bmw.ba/hr/all-models/7-series/sedan/2022/bmw-serije-7-limuzina-znacajke.html');
  }

  const BmwNews = () => {
    Linking.openURL('https://www.bmwblog.com');
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/bgPictures/bg.jpg')}
      resizeMode='cover'
      style={styles.imageBg}
      blurRadius={10}/>
      
      <ScrollView>
      <View style={styles.naslovView}><Text style={styles.naslov}>BMW OFFIACIAL APP</Text></View>
  
      <TouchableOpacity onPress={() => navigation.navigate('Models')}>
      <View style={styles.picOne}><Text style={styles.textOne}>MODELS</Text>
      <Image source={require('../../assets/bgPictures/g30.jpg')} style={{resizeMode:'cover', width:'100%',
      height:'100%',}}/>
      </View>
      </TouchableOpacity>

    
      <View style={styles.picAll}>
      <TouchableOpacity onPress={() => navigation.navigate('History')}>
      <View style={styles.picTwo}><Text style={styles.textTwo}>HISTORY</Text>
      <Image source={require('../../assets/bgPictures/m3e30.jpg')} style={{resizeMode:'cover', width:'100%',
      height:'100%',}}/>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={BmwNews}>
      <View style={styles.picThree}><Text style={styles.textThree}>NEWS</Text>
      <Image source={require('../../assets/bgPictures/bmwnews.jpeg')} style={{resizeMode:'cover', width:'100%',
      height:'100%',}}/>
      </View>
      </TouchableOpacity>
      </View>
     
      <TouchableOpacity onPress={LinkBmwI7}>
      <View style={styles.picFour}><Text style={styles.textFour}>NEW LUXURY MODEL</Text>
      <Image source={require('../../assets/bgPictures/g70.jpg')} style={{resizeMode:'cover', width:'100%',
      height:'100%',}}/>
      </View>
      </TouchableOpacity>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding:10,
    
  },
  naslov:{
    fontSize:30,
    fontWeight:'bold',
    textShadowColor:'black',
    textShadowRadius:10,
    color:'white'
  },
  naslovView:{
    justifyContent:'center',
    alignItems:'center',
    top:50,
    borderColor:'black',
    marginBottom:20
  },
  picOne:{
    width:390,
    height:300,
    borderColor:'white',
    borderWidth:3,
    marginTop:59,
    justifyContent:'center',
    alignItems:'center'
    
  },
  picTwo:{
    width:190,
    height:190,
    borderColor:'white',
    borderWidth:3,
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
  },
  picThree:{
    width:190,
    height:190,
    borderColor:'white',
    borderWidth:3,
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
  },
  picAll:{
  display:'flex',
  flexDirection:'row',
  width:390,
  height:190,
  justifyContent:'space-between',
  position:'relative',
  marginTop:10,
  },
  picFour:{
    width:390,
    height:300,
    borderColor:'white',
    borderWidth:3,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  buttonContactUs:{
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:60,
    borderColor:'black',
    borderWidth:1,
    marginRight:'100%',
    marginLeft:'25%',
    marginTop:10,
    borderRadius:50
  },
 textOne:{
  position:'absolute', 
  zIndex:1, 
  fontSize:50, 
  color:'white', 
  textShadowColor:'black', 
  textShadowRadius:10
 },
 textTwo:{
  position:'absolute', 
  zIndex:1, 
  fontSize:40, 
  color:'white', 
  textShadowColor:'black', 
  textShadowRadius:10
 },
 textThree:{
  position:'absolute', 
  zIndex:1, 
  fontSize:40, 
  color:'white',
  textShadowColor:'black', 
  textShadowRadius:10
 },
 textFour:{
  position:'absolute', 
  zIndex:1, 
  fontSize:30, 
  color:'white', 
  textShadowColor:'black', 
  textShadowRadius:10
 },
 imageBg:{
  width:'120%',
  height:'120%',
  position:'absolute'
 
 }
 
});

export default SecondPage;