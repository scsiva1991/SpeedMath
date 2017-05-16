import React, { Component } from 'react';

import {
  View
  StyleSheet,
  Image
} from 'react-native';

import Fonts from '../util/Fonts';
import Colors from '../util/Colors';

export default class SplashScreen extends Component {
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
