import * as React from 'react';
import { View, Text, Button,Icon,TouchableOpacity, Image } from 'react-native';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import {COLORS,FONTS,SIZES,icons,images} from './constants'; 

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent'
  }
}
const Stack = createStackNavigator();
   

const App=()=>{
  return(
    <NavigationContainer theme={theme}>
         <Stack.Navigator initialRouteName='Home'>
                     <Stack.Screen 
                                  name='Home'
                                  component={Home} 
                                  // header title style
                                  options={
                                    {
                                    title:'SHOE SELECTOR',
                                    headerTintColor:COLORS.lightGray,
                                  headerTitleStyle:{
                                    ...FONTS.navTitle
                                  },
                                  
                                  // headerLeftIcon Style
                                  headerLeft:({onPress})=>(
                                    <TouchableOpacity style={{marginLeft:SIZES.padding}} onPress={onPress}>
                                    <Image source={icons.menu} resizeMode='contain' style={{width:25,height:25}}/>
                                    </TouchableOpacity>
                                  ),
                                  
                                  // headerRightIcon Style
                                  headerRight:({onPress})=>(
                                    <TouchableOpacity style={{marginRight:SIZES.padding}} onPress={()=>alert('Header right on Pressed')}>
                                    <Image source={icons.search} resizeMode='contain' style={{width:30,height:30}}/>
                                    </TouchableOpacity>
                                  ),
                                  }
                                  }
                                  />

          </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;