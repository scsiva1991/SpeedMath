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
import Colors from './util/Colors';

const AppNavigator = StackNavigator({
  Splash: {screen: SplashScreen},
  Main: {screen: MainScreen},
});

export default class App extends Component{

  constructor(props){
    super(props);
    StatusBar.setBackgroundColor(Colors.darkColor,false);
  }

  componentWillMount() {
    setTimeout(() => {navigate('Main');}, 1000);
  }

  render() {
    return(
      <SplashScreen />
    )
  }
}
