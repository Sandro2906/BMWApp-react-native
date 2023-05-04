import AllModels from './components/AllModels';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import MoreInfoPage from './components/MoreInfoPage';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryPage from './components/HistoryPage';

const Stack = createNativeStackNavigator();

function HomeScreen(navigator){
  return(
    <FirstPage />
  );
}

function MainScreen(){
  return(
    <SecondPage />
  );
}

function ModelsScreen(){
  return(
    <AllModels />
  );
}

function HistoryScreen(){
  return(
    <HistoryPage />
  );
}

function ModelM4Screen(){
  return(
    <MoreInfoPage
    model={'BMW M4'}
    price={"$77.995"}
    infoYear={'2020'}
    infoHorsePower={'503'}
    infoEngine={'3.0 TwinTurbo'}
    infoTransmission={'Automatic'}
    image={require('./assets/moreInfoImages/BMWM4/bmwm4Front.jpg')}
    image1={require('./assets/moreInfoImages/BMWM4/bmwm4FrontSide.jpg')}
    image2={require('./assets/moreInfoImages/BMWM4/bmwm4Back.jpg')}
    image3={require('./assets/moreInfoImages/BMWM4/bmwm4Interior1.jpg')}
    image4={require('./assets/moreInfoImages/BMWM4/BMWM4INTERIOR.jpg')}/>
  );
}

function ModelM3Screen(){
  return(
    <MoreInfoPage
    model={'BMW M3'}
    price={"$75.295"}
    infoYear={'2023'}
    infoHorsePower={'550'}
    infoEngine={'3.0 TwinTurbo'}
    infoTransmission={'Automatic'}
    image={require('./assets/moreInfoImages/BMWM3/bmwm3Front.jpg')}
    image1={require('./assets/moreInfoImages/BMWM3/bmwm3FrontSide.jpg')}
    image2={require('./assets/moreInfoImages/BMWM3/bmwm3Back.jpg')}
    image3={require('./assets/moreInfoImages/BMWM3/bmwm3Interior.jpg')}
    image4={require('./assets/moreInfoImages/BMWM3/bmwm3Interior2.jpg')}/>
  );
}

function ModelM2Screen(){
  return(
    <MoreInfoPage
    model={'BMW M2'}
    price={"$63,195"}
    infoYear={'2023'}
    infoHorsePower={'550'}
    infoEngine={'3.0 Inline 6'}
    infoTransmission={'Manual'}
    image={require('./assets/moreInfoImages/BMWM2/bmwm2Front.jpg')}
    image1={require('./assets/moreInfoImages/BMWM2/bmwM2Side.jpg')}
    image2={require('./assets/moreInfoImages/BMWM2/bmwm2Back.jpg')}
    image3={require('./assets/moreInfoImages/BMWM2/bmwm2Interior.jpg')}
    image4={require('./assets/moreInfoImages/BMWM2/bmwm2Interior2.jpg')}/>
  );
}

function ModelM7Screen(){
  return(
    <MoreInfoPage
    model={'BMW M7'}
    price={"$157.800"}
    infoYear={'2023'}
    infoHorsePower={'523'}
    infoEngine={'3.0 Inline 6'}
    infoTransmission={'Automatic'}
    image={require('./assets/moreInfoImages/BMWM7/bmwm7Front.jpg')}
    image1={require('./assets/moreInfoImages/BMWM7/bmwm7FrontSide.jpg')}
    image2={require('./assets/moreInfoImages/BMWM7/bmwm7Back.jpg')}
    image3={require('./assets/moreInfoImages/BMWM7/bmwm7Interior.jpg')}
    image4={require('./assets/moreInfoImages/BMWM7/bmwm7Interior2.jpg')}/>
  );
}  
function ModelX6Screen(){
  return(
    <MoreInfoPage
    model={'BMW X6'}
    price={"$105.750"}
    infoYear={'2023'}
    infoHorsePower={'335'}
    infoEngine={'3.0 Inline 6'}
    infoTransmission={'Automatic'}
    image={require('./assets/moreInfoImages/BMWX6/bmwx6Front.jpg')}
    image1={require('./assets/moreInfoImages/BMWX6/bmwx6FrontSide.jpg')}
    image2={require('./assets/moreInfoImages/BMWX6/bmwx6Back.jpg')}
    image3={require('./assets/moreInfoImages/BMWX6/bmwx6Side.jpg')}
    image4={require('./assets/moreInfoImages/BMWX6/bmwx6Interior.jpg')}/>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Models" component={ModelsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ModelM" component={ModelM4Screen} options={{ headerShown: false }} />
        <Stack.Screen name="ModelM3" component={ModelM3Screen} options={{ headerShown: false }} />
        <Stack.Screen name="ModelM2" component={ModelM2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="ModelM7" component={ModelM7Screen} options={{ headerShown: false }} /> 
        <Stack.Screen name="ModelX6" component={ModelX6Screen} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};