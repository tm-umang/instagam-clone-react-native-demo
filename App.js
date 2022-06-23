
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/navigation/TabNavigation';
import EditProfileScreen from './src/screens/EditProfileScreen';
import IgtvScreen from './src/screens/IgtvScreen';
import ChatScreen from './src/screens/ChatScreen';
import Camerascreen from './src/screens/Camerascreen';
import LiveScreen from './src/screens/LiveScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Tab">
        <Stack.Screen name="Tab" component={TabNavigation}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        <Stack.Screen name="Igtv" component={IgtvScreen}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
        <Stack.Screen name="Camera" component={Camerascreen}/>
        <Stack.Screen name="Live" component={LiveScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}