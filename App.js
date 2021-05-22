import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageSceen';
import MainScreen from './screens/MainScreen';
import DataScreen from './screens/DataScreen';

const DataStack = createStackNavigator({
  Data: DataScreen,
  Main: MainScreen,
});

const ApptabNavigator = createBottomTabNavigator(
  {
    Home : {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name= 'ios-home' size={24} color={tintColor}/>
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name='ios-chatbox' size={24} color={tintColor} />
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#11dddd",
      inactiveTintColor:"#baffe3",
      showLabel: false
    }
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Data: DataStack,
      App: ApptabNavigator
    },
    {
      initialRouteName: "Data"
    }
  )
)

