import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableNativeFeedback
} from 'react-native';

import Colors from '../util/Colors';
import Fonts from '../util/Fonts';
import Constants from '../util/Constants';
import AsyncStorage from '../util/AsyncStorage';
import { NavigationActions } from 'react-navigation';

export default class MainScreen extends Component {

  componentWillMount() {
    AsyncStorage.getJsonObject(Constants.KEY_SPEED_MATH, (result) => {
      console.log( ' -- result --', result );
      //if( result == null ) {
        AsyncStorage.saveJSONValues( Constants.KEY_SPEED_MATH, {
          'RANGES' : Constants.RANGES,
          'DURATION' : Constants.DURATION,
          'HIGH_SCORES' : [0, 0, 0]
        });
      //}
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#444153',
        }}>
        <View style={[styles.appTitleBox]}>
          <Text style={[styles.appTitle]}> Speed Math </Text>
        </View>
        <ScrollView style={{ marginTop: 30 }}>
          <Text style={[styles.intro]}>
            The Speed Math Game is a fully customizable fast-paced speed drill
            where you are given a minute to solve as many arithmetic
            problems you can.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <TouchableNativeFeedback
              onPress={() => navigate('GameScreen')}
              background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                START
              </Text>
            </View>
          </TouchableNativeFeedback>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
              <Image
                source={require('../images/settings@1x.png')}
                style={{ width: 50, height: 50, margin: 5 }}
              />
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
              <Image
                source={require('../images/practice.png')}
                style={{ width: 50, height: 50, margin: 5 }}
              />
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
              <Image
                source={require('../images/help.png')}
                style={{ width: 50, height: 50, margin: 5 }}
              />
            </TouchableNativeFeedback>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitleBox: {
    backgroundColor: '#30D1D5',
    padding: 10,
    marginTop: 60,
  },
  appTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Fonts.OpenSansRegular,
  },
  intro : {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    margin: 20,
    padding: 10,
    fontFamily: Fonts.OpenSansItalic
  },
  menuBorder: {
    width: 150,
    alignSelf: 'center',
    margin: 10,
  },
  menuText: {
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.OpenSansRegular,
  },
});
