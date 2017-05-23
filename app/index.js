import React, { Component } from 'react';

import {
  View,
  Text,
  Alert,
  StatusBar,
  Navigator
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import SplashScreen from './layout/SplashScreen';
import MainScreen from './layout/MainScreen';
import GameScreen from './layout/GameScreen';
import BestScoresScreen from './layout/BestScoresScreen';
import CongratsScreen from './layout/CongratsScreen';

export default StackNavigator({
  SplashScreen: { screen: SplashScreen },
  MainScreen: { screen: MainScreen },
  GameScreen: { screen: GameScreen },
  BestScoresScreen: { screen: BestScoresScreen},
  CongratsScreen: { screen: CongratsScreen}
}, {
  headerMode: 'none'
})
