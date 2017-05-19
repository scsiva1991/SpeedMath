import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

import Colors from '../util/Colors';
import Fonts from '../util/Fonts';
import Constants from '../util/Constants';
import { NavigationActions } from 'react-navigation'

export default class MainScreen extends Component {
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
          <TouchableHighlight onPress={() =>
            navigate('GameScreen', { mode: Constants.EASY });
          }>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                Constants.EASY
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                Constants.MEDIUM
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                Constants.HARD
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                BEST SCORES
              </Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <TouchableHighlight onPress={this._onPressButton}>
              <Image
                source={require('../images/settings.png')}
                style={{ width: 50, height: 50, margin: 5 }}
              />
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton}>
              <Image
                source={require('../images/practice.png')}
                style={{ width: 50, height: 50, margin: 5 }}
              />
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton}>
              <Image
                source={require('../images/help.png')}
                style={{ width: 50, height: 50, margin: 5 }}
              />
            </TouchableHighlight>

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
