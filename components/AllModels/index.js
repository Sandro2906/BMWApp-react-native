import React from "react";
import { View, Text, FlatList} from 'react-native';
import cars from "./cars";
import ModelsPage from "../ModelsPage";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const AllModels = (props) => {
    
    return (
        
    <View style={styles.container}>
        <FlatList data={cars} renderItem={({item}) => <ModelsPage car={item} />}
        keyExtractor={(item) => item.model} 
        snapToAlignment={'start'} 
        decelerationRate={'fast'} 
        snapToInterval={Dimensions.get('window').height} 
        showsVerticalScrollIndicator={false}/>
     </View>

    );
}

    const styles = StyleSheet.create({
        container: {
            width: "100%",
        }
    });
 
export default AllModels;