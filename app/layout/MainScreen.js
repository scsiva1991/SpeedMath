import React, { Component } from 'react';

import {
  View
  StyleSheet,
  Image,
  Text
} from 'react-native';

import Fonts from '../util/Fonts';
import Colors from '../util/Colors';

export default class MainScreen extends Component {
  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Main</Text>
      </View>
    )
  }
}
