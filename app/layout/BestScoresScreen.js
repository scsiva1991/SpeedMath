import React, { Component } from 'react';

import { View, Text, Image, ScrollView, StyleSheet, FlatList } from 'react-native';

import AsyncStorage from '../util/AsyncStorage';
import Constants from '../util/Constants';

export default class BestScoresScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s1 : 0, s2: 0, s3: 0
    }
  }

  componentWillMount() {
    AsyncStorage.getJsonObject(Constants.KEY_SPEED_MATH, (result) => {
      if( result != null ) {
        console.log('----- best score -----', result.HIGH_SCORES);
        this.setState({ s1 : result.HIGH_SCORES[0], s2 : result.HIGH_SCORES[1], s3: result.HIGH_SCORES[2] });
      }
    });
  }

  render() {
    console.log(' *** ', this.state.scores )
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#444153',
        }}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}> BEST SCORES </Text>
        </View>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 50
          }}>
          <Image source={require('../images/winner.png')}
          style={{height: 100, width: 100, alignSelf: 'center'}}></Image>
            <Text style={[styles.score]}>{1} {')  '} {this.state.s1 > 0 ? this.state.s1 : '-'}</Text>
            <Text style={[styles.score]}>{2} {')  '} {this.state.s2 > 0 ? this.state.s2 : '-'}</Text>
            <Text style={[styles.score]}>{3} {')  '} {this.state.s3 > 0 ? this.state.s3 : '-'}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#444153',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 50
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
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
  score: {
    color: '#fff',
    margin: 5,
    fontSize: 30
  },
});
