import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { StyleSheet, Dimensions } from "react-native";


const ModelsPage = (props) => {

    const {model, price, image, screen} = props.car;

    const navigation = useNavigation();

    const handlePress = (screenName) => {
      navigation.navigate(screenName);
    };
  

    return (

        <View style={styles.carContainer}>

        <ImageBackground style={styles.image} source={image} />
        <View style={styles.titles}>

        <Text style={styles.title}>{model}</Text>
        <Text style={styles.subtitle}>{price}</Text>

        </View>
        <TouchableOpacity style={styles.viewButton} onPress={() => handlePress(screen)}>
          <Text style={styles.button}>MORE INFO</Text>
          </TouchableOpacity>
      </View>

    );
};

const styles = StyleSheet.create({
    carContainer:{
        width: "100%",
        height: Dimensions.get('window').height,
        alignItems:'center'
      },
      titles:{
      marginTop: "30%",
      width: "100%",
      alignItems: 'center',
      justifyContent:'center'
      
      },
      title:{
        fontSize: 40,
        fontWeight: "bold",
        color:'white',
        textShadowColor:'black',
        textShadowRadius:10
        
      },
      subtitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        textShadowColor:'black',
        textShadowRadius:10
    
      },
      image:{
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      position: "absolute"
      },
    button:{
      color:'white',
      fontSize:30,
      textShadowColor:'black',
      textShadowRadius:10
    },
    viewButton:{
      borderColor:'white',
      borderWidth:1,
      borderRadius:100,
      width:280,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:100,
      
    }
});

export default ModelsPage;
