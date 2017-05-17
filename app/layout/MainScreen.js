import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#383547',
        }}>
        <View style={[styles.appTitleBox]}>
          <Text style={[styles.appTitle]}> SpeedMath </Text>
        </View>
        <ScrollView style={{ marginTop: 30 }}>
          <TouchableHighlight onPress={this._onPressButton}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                EASY
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                MEDIUM
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton}>
            <View style={[styles.menuBorder]}>
              <Text style={[styles.menuText]}>
                HARD
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
    padding: 5,
    marginTop: 100,
  },
  appTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
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
  },
});
