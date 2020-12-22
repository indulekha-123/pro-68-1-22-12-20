import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Fb  from './screen/fb.js';
import Int  from './screen/in.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Buzz App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const TabNavigator=createBottomTabNavigator({
Facebook:{screen:Fb},
Instagram:{screen:Int}
})

const AppContainer=createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
