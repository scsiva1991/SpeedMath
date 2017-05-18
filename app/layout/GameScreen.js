import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class GameScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.gameTopLayout]}>
          <View style={[styles.progressBar]}>
            <Text>progressBar</Text>
          </View>
          <View style={[styles.score]}>
            <Text>Score: 0</Text>
          </View>
        </View>
        <View style={[styles.gameLayout]}>
          <Text style={[styles.question]}> 1000.33 + 299.99 </Text>
          <Text style={[styles.question]}> = </Text>
          <View style={[styles.answerLayout]}>
            <Text style={[styles.answer]}>23053 </Text>
          </View>
        </View>
        <View style={[styles.buttonLayout], {marginTop: 20}}>
          <View style={[styles.buttonRow]}>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 7 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 8 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 9 </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 4 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 5 </Text>

              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 6 </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 1 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 2 </Text>

              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 3 </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> 0 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Text style={[styles.buttonValue]}> . </Text>

              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={this._onPressButton}>
              <View>
                <Image
                  source={require('../images/delete.png')} 
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383547',
  },
  gameTopLayout: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    marginLeft: 5,
  },
  score: {
    marginRight: 5,
    color: '#fff',
  },
  gameLayout: {
    backgroundColor: '#30D1D5',
    minHeight: 100,
    height: 'auto',
    padding: 10,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    margin: 5,
  },
  answerLayout: {
    backgroundColor: '#fff',
    padding: 5,
    minWidth: 100,
  },
  answer: {
    color: '#383547',
    textAlign: 'center',
  },
  buttonLayout: {},
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBotom: 5,
  },
  buttonValue: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#444153',
    height: 30,
    margin: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
