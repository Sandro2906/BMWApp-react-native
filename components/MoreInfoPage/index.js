import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';

const MoreInfoPage = (props) => {

    const AllModelsLink = () => {
      Linking.openURL('https://www.bmw.ba/hr/all-models.html?tl=grp-wdpl-bcom-mix-mn-.-nscf-.-.-')
    }

    const navigation = useNavigation();
    const {model, price, image, image1, image2, image3, image4, infoEngine, infoHorsePower, infoYear, infoTransmission} = props;

  return (

    <View style={styles.container}>
      
      <ImageBackground source={require('../../assets/bgPictures/bg.jpg')}
      blurRadius={0}
      style={styles.imgBg}/>

      <View style={styles.header}>
        <Text style={styles.title}>{model}</Text>
      </View>
      <View style={styles.headerPrice}>
        <Text style={styles.titlePrice}>{price}</Text>
      </View>

      <ScrollView horizontal={true} decelerationRate="fast">
        <View style={styles.viewImages}>
            <Image source={image} style={styles.images}/>
            <Image source={image1} style={styles.images}/>
            <Image source={image2} style={styles.images}/>
            <Image source={image3} style={styles.images}/>
            <Image source={image4} style={styles.images}/>
        </View>
      </ScrollView>

      <View style={styles.infoContainer}>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Engine:</Text>
          <Text style={styles.infoText}> {infoEngine}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Horsepower:</Text>
          <Text style={styles.infoText}> {infoHorsePower} </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Year:</Text>
          <Text style={styles.infoText}> {infoYear}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Transmission:</Text>
          <Text style={styles.infoText}> {infoTransmission}</Text>
        </View>

      </View>

<View style={styles.buttonsView}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Models')}>
        <Text style={styles.buttonText}>BACK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={(AllModelsLink)}>
        <Text style={styles.buttonText}>WEB SITE</Text>
      </TouchableOpacity>

 </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    marginTop:20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  infoContainer: {
    borderWidth: 3,
    borderColor: '#000',
    padding: 10,
    marginVertical: 20,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft:30,
  },
  infoText:{
    marginRight:30
  },
  button: {
    backgroundColor: 'black',
    width:'40%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerPrice:{
    justifyContent: 'flex-start',
  },
  titlePrice:{
    justifyContent:'flex-start',
    
  },
  viewImages:{
    width:'100%',
    height:300,
    flexDirection:'row',
    marginTop:100
  },
  images:{
    width:450,
    height:300,
    marginHorizontal:20,
    borderWidth:2,
    borderColor:'black',
  },
  bgImage:{
    width:'130%',
    height:'120%',
    position:'absolute'
  },
  buttonsView:{
    justifyContent:'space-between',
    flexDirection:'row',

  },
  imgBg:{
    width:500,
    height:1000,
    position:'absolute'
  }
});

export default MoreInfoPage;