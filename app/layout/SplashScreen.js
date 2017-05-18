import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  Text,
  Alert
} from 'react-native';

import Fonts from '../util/Fonts';
import Colors from '../util/Colors';
import { NavigationActions } from 'react-navigation'

export default class SplashScreen extends Component {

  componentDidMount () { 
    this.navigateTo('MainScreen');
  }

  navigateTo = (routeName: string) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={require('../images/logo.png')} style={{width:100, height:100}}/>
      </View>
    )
  }
}
