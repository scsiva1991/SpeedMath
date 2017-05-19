import React, { Component } from 'react';

import {
  View,
  Text,
  Alert,
  BackAndroid,
  StatusBar,
  Navigator
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import SplashScreen from './layout/SplashScreen';
import MainScreen from './layout/MainScreen';
import GameScreen from './layout/GameScreen'

export default StackNavigator({
  SplashScreen: { screen: SplashScreen },
  MainScreen: { screen: MainScreen },
  GameScreen: { screen: GameScreen }
}, {
  headerMode: 'none'
})
