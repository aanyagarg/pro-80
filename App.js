import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StarMap from './screens/StarMap';
import SpaceCrafts from './screens/SpaceCrafts';
import DailyPic from './screens/DailyPic';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown : false}}>
    <Stack.Screen name = "Home" component = {HomeScreen}/>
    <Stack.Screen name = "SpaceCrafts" component = {SpaceCrafts}/>
    <Stack.Screen name = "StarMap" component = {StarMap}/>
    <Stack.Screen name = "DailyPic" component = {DailyPic}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
