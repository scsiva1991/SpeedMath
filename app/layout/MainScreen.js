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
import { NavigationActions } from 'react-navigation'

export default class MainScreen extends Component {

  componentWillMount() {
    AsyncStorage.getJsonObject(Constants.KEY_SCORES, (result) => {
      console.log( ' -- result --', result );
      //if( result == null ) {
        AsyncStorage.saveJSONValues( Constants.KEY_SCORES, {
          'EASY' : [0, 0, 0],
          'MEDIUM' : [0, 0, 0],
          'HARD' : [0, 0, 0]
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
          backgroundColor: '#383547',
        }}>
        <View style={[styles.appTitleBox]}>
          <Text style={[styles.appTitle]}> Speed Math </Text>
        </View>
        <ScrollView style={{ marginTop: 30 }}>
          <TouchableNativeFeedback
            onPress={() => navigate('GameScreen', { mode: 'EASY' })}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                {Constants.EASY}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                {Constants.MEDIUM}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                {Constants.HARD}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                BEST SCORES
              </Text>
            </View>
          </TouchableNativeFeedback>
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
                source={require('../images/settings.png')}
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
  menuBorder: {
    width: 200,
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
