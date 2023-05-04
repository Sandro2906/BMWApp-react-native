import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';


const HistoryPage = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <ImageBackground  
      source={require('./../../assets/bgPictures/historyBg.jpg')}
      resizeMode='cover'
      style={styles.imageBg}
      blurRadius={10}/>

      <ScrollView>
     

      <View style={styles.viewTitle}>
        <Text style={styles.title}>HISTORY OF BMW</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BMW 3</Text>
        <ScrollView horizontal={true} >

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW3/BMWE21.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E21</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW3/BMWE30.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E30</Text></View>
          </View>

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW3/BMWE36.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E36</Text></View>
          </View>

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW3/BMWE46.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E46</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW3/BMWE90.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E90</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW3/BMWF30.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW F30</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW3/BMWG20.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E20</Text></View>
          </View>
        </ScrollView>
      </View>  
      <View style={styles.viewText}>
        <Text style={styles.viewTextBmw}>
        {"\n"}
1st Generation (E21):{"\n"}

Produced from 1975-1983{"\n"}
Best engines: 320i (2.0L inline-4, 110 hp), 323i (2.3L inline-6, 141 hp){"\n"}
Top horsepower: 141 hp (323i){"\n"}{"\n"}
2nd Generation (E30):{"\n"}

Produced from 1982-1994{"\n"}
Best engines: 325i (2.5L inline-6, 168 hp), M3 (2.3L inline-4, 192 hp){"\n"}
Top horsepower: 238 hp (M3 Sport Evolution){"\n"}{"\n"}
3rd Generation (E36):{"\n"}

Produced from 1990-2000{"\n"}
Best engines: 328i (2.8L inline-6, 190 hp), M3 (3.2L inline-6, 240 hp){"\n"}
Top horsepower: 321 hp (M3 GT){"\n"}{"\n"}
4th Generation (E46):{"\n"}

Produced from 1998-2006{"\n"}
Best engines: 330i (3.0L inline-6, 225 hp), M3 (3.2L inline-6, 333 hp){"\n"}
Top horsepower: 360 hp (M3 GTR){"\n"}{"\n"}
5th Generation (E90):{"\n"}

Produced from 2005-2013{"\n"}
Best engines: 335i (3.0L inline-6, 300 hp), M3 (4.0L V8, 414 hp){"\n"}
Top horsepower: 450 hp (M3 CRT){"\n"}{"\n"}
6th Generation (F30):{"\n"}

Produced from 2011-2019{"\n"}
Best engines: 335i (3.0L inline-6, 300 hp), 340i (3.0L inline-6, 320 hp){"\n"}
Top horsepower: 450 hp (M3 CS){"\n"}{"\n"}
7th Generation (G20):{"\n"}

Produced from 2018-present{"\n"}
Best engines: 330i (2.0L inline-4, 255 hp), M340i (3.0L inline-6, 382 hp){"\n"}
Top horsepower: 503 hp (M3 Competition){"\n"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BMW 5</Text>
        <ScrollView horizontal={true} >

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW5/BMWE12.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E12</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW5/BMWE28.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E28</Text></View>
          </View>

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW5/BMWE34.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E24</Text></View>
          </View>

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW5/BMWE39.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E29</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW5/BMWE60.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E60</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW5/BMWF10.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW F10</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW5/BMWG30.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW G30</Text></View>
          </View>
        </ScrollView>
      </View>  

      <View style={styles.viewText}>
        <Text style={styles.viewTextBmw}> 
        {"\n"}
1st Generation (E12):{"\n"}
Produced from 1972-1981{"\n"}
Best engines: 528i (2.8L, 169 hp), M535i (3.5L, 215 hp){"\n"}
Top horsepower: 215 hp (M535i){"\n"}{"\n"}

2nd Generation (E28):{"\n"}
Produced from 1981-1988{"\n"}
Best engines: 535i (3.5L, 218 hp), M535i (3.5L, 215 hp){"\n"}
Top horsepower: 286 hp (M5){"\n"}{"\n"}

3rd Generation (E34):{"\n"}
Produced from 1988-1996{"\n"}
Best engines: 540i (4.0L V8, 282 hp), M5 (3.6L inline-6, 311 hp){"\n"}
Top horsepower: 340 hp (M5){"\n"}{"\n"}

4th Generation (E39):{"\n"}
Produced from 1995-2003{"\n"}
Best engines: 540i (4.4L V8, 282 hp), M5 (4.9L V8, 394 hp){"\n"}
Top horsepower: 394 hp (M5){"\n"}{"\n"}

5th Generation (E60):{"\n"}
Produced from 2003-2010{"\n"}
Best engines: 545i (4.4L V8, 325 hp), M5 (5.0L V10, 500 hp){"\n"}
Top horsepower: 500 hp (M5){"\n"}{"\n"}

6th Generation (F10):{"\n"}
Produced from 2010-2016{"\n"}
Best engines: 535i (3.0L inline-6, 300 hp), 550i (4.4L V8, 445 hp){"\n"}
Top horsepower: 560 hp (M5){"\n"}{"\n"}

7th Generation (G30):{"\n"}
Produced from 2017-present{"\n"}
Best engines: 540i (3.0L inline-6, 335 hp), M550i (4.4L V8, 523 hp){"\n"}
Top horsepower: 617 hp (M5 Competition){"\n"}
{"\n"}
        </Text>
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BMW 5</Text>
        <ScrollView horizontal={true} >

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW7/BMWE23.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E23</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW7/BMWE32.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E32</Text></View>
          </View>

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW7/BMWE38.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E38</Text></View>
          </View>

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW7/BMWE65.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW E65</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW7/BMWF01.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW F01</Text></View>
          </View>
        
          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW7/BMWG11.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW G11</Text></View>
          </View>

          <View style={styles.viewTextImage}>
          <Image
            source={require('./../../assets/historyModels/BMW7/BMWG70.jpg')}
            style={styles.image}
          />
          <View style={styles.viewNameCar}><Text style={styles.textName}>BMW G70</Text></View>
          </View>

        </ScrollView>

      </View>  
      <View style={styles.viewTextLast}>
        <Text style={styles.viewTextBmw}>
        {"\n"}
1st Generation (E23):{"\n"}
Produced from 1977-1986{"\n"}
Best engines: 745i (3.2L turbocharged inline-6, 252 hp), 735i (3.4L inline-6, 218 hp){"\n"}
Top horsepower: 252 hp (745i){"\n"}{"\n"}
2nd Generation (E32):{"\n"}

Produced from 1986-1994{"\n"}
Best engines: 750iL (5.0L V12, 296 hp), 740i (4.0L V8, 282 hp){"\n"}
Top horsepower: 300 hp (750iL){"\n"}{"\n"}
3rd Generation (E38):{"\n"}

Produced from 1994-2001{"\n"}
Best engines: 750iL (5.4L V12, 322 hp), 740i (4.4L V8, 282 hp){"\n"}
Top horsepower: 372 hp (750iL){"\n"}{"\n"}
4th Generation (E65/E66):{"\n"}

Produced from 2001-2008{"\n"}
Best engines: 760Li (6.0L V12, 438 hp), 745i (4.4L V8, 325 hp){"\n"}
Top horsepower: 602 hp (760Li){"\n"}{"\n"}
5th Generation (F01/F02):{"\n"}

Produced from 2008-2015{"\n"}
Best engines: 750i (4.4L V8, 445 hp), 760Li (6.0L V12, 535 hp){"\n"}
Top horsepower: 610 hp (Alpina B7){"\n"}{"\n"}
6th Generation (G11/G12):{"\n"}

Produced from 2015-2021{"\n"}
Best engines: 750i (4.4L V8, 523 hp), 760Li (6.6L V12, 601 hp){"\n"}
Top horsepower: 610 hp (Alpina B7){"\n"}{"\n"}
7th Generation (G70):{"\n"}

Produced from 2022-present{"\n"}
Best engines: 750i (4.4L V8, 523 hp), 745e (3.0L inline-6 plug-in hybrid, 389 hp){"\n"}
Top horsepower: 610 hp (Alpina B7){"\n"}{"\n"}

        </Text>
      </View>
      
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewTitle:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    top:40,
    marginTop:20,
    marginBottom:40
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
    textShadowRadius:5,
    textShadowColor:'black',
  },
  section: {
    width:'100%',
    height:220,
    marginTop:50,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:20,
    color:'white',
    textShadowRadius:5,
    textShadowColor:'black',
  },
  image: {
    width: 250,
    height: 150,
    borderColor:'white',
    borderWidth:1,
  },
  viewTextImage:{
    width:250,
    height: 180,
    marginRight:15,
    marginLeft:15,
  },
  viewNameCar:{
    width:250,
    height:30,
    justifyContent:'center',
    alignItems:'center',
  },
  textName:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textShadowRadius:5,
    textShadowColor:'white',
  },
  viewText:{
    marginTop:40,
    width:400,
    borderColor:'white',
    marginLeft:10,
    borderWidth:3,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
  },
  viewTextBmw:{
    fontSize:15,
    marginLeft:20,
    marginRight:20,
    marginTop:5,
    marginBottom:5,
    color:'white',
  },
  imageBg:{
    width:'100%',
    height:'100%',
    position:'absolute'
  },
  viewTextLast:{
    marginTop:40,
    width:400,
    borderColor:'white',
    marginLeft:10,
    borderWidth:3,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50
  },


});
 
export default HistoryPage;