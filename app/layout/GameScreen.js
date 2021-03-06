import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  BackHandler,
  Alert
} from 'react-native';

import Constants from '../util/Constants';
import Fonts from '../util/Fonts';
import AsyncStorage from '../util/AsyncStorage';
import { NavigationActions } from 'react-navigation';

export default class GameScreen extends Component {

  constructor(props) {
    super();
    this.showAlert = this.showAlert.bind(this);
    this.state = { n1: 0, n2:0, answer: 0, userAnswer: '', expr: '', mode : '', score: 0, time : 10};
  }

  componentWillMount() {
     const { params } = this.props.navigation.state;
     this.setQuestion( params.mode );
     this.setState({ mode: params.mode });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.showAlert);
    const _this = this;
    var interval = setInterval(function() {
      var t1 = _this.state.time - 1;
      if( t1 == 0 ) {
        _this.checkHighScore();
        clearInterval( interval );
      }
      _this.setState({ time: t1, interval: interval});
    }, 1000);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.showAlert);
    if( this.state.time !== 0 ) {
      clearInterval( this.state.interval );
    }
  }

  checkHighScore() {
    AsyncStorage.getJsonObject(Constants.KEY_SCORES, (result) => {
      if( result != null ) {
        console.log( ' -- result --', result );
        console.log( ' -- mode --', this.state.mode );
        console.log( ' -- score --', this.state.score );
        console.log( ' -- modeResult --', result[ mode ], result['EASY'] );
        let mode = this.state.mode;
        let modeResult = result[ mode ];
        let score = this.state.score;
        if( score > Math.min(...modeResult) ) {

          modeResult.pop();
          modeResult.push( score );
          modeResult.sort(function(a, b) {
            return b-a;
          });
          result[ mode ] = modeResult;
          AsyncStorage.saveJSONValues( Constants.KEY_SCORES, {
            result['result']
          });
        }
        console.log( '-- easy result ---', result, result[mode]);
      }
    });
  }

  showAlert() {
    Alert.alert(
      'Warning!!',
      'You will lose the current game',
      [
        {
          text: 'No', onPress: () => {}
        },
        {
          text: 'Yes', onPress: () => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'MainScreen' })],
            });

            this.props.navigation.dispatch(resetAction);
          }
        }
      ],
      {
        cancelable: false
      }
    )
    return true;
  }

  onPressButton = (i) => {
    if(parseFloat(this.state.userAnswer+i) == this.state.answer) {
      this.setState({
        userAnswer: this.state.userAnswer + i
      });
      setTimeout(function() {
        this.setState({score: this.state.score + 1, userAnswer: ''});
        this.setQuestion( this.state.mode );
      }.bind(this), 250);
    } else if(i === '*') {
      let removedNumber = this.state.userAnswer.split('').splice(0, this.state.userAnswer.length-1);
      this.setState({
        userAnswer: removedNumber.join('')
      });
    } else {
      this.setState({
        userAnswer: this.state.userAnswer + i
      });
    }
  }

  setQuestion( mode ) {
    let n1 = 0, n2 = 0;
    let exprArr = Constants.EXPRESSIONS;
    let expr = exprArr[ Math.floor(Math.random() * exprArr.length)];
    let answer = 0;

    if( mode == Constants.EASY ) {
      n1 = Math.floor(Math.random() * Constants.EASY_NUM2) + 1;
      n2 = Math.floor(Math.random() * n1) + 1;
    } else if( mode == Constants.MEDIUM ) {
      n1 = Math.floor(Math.random() * Constants.MEDIUM_NUM2) + 1;
      n2 = Math.floor(Math.random() * n1) + 1;
    } else {
      n1 = Math.floor(Math.random() * Constants.HARD_NUM2) + 1;
      n2 = Math.floor(Math.random() * n1) + 1;
    }
    answer = parseInt(eval( n1 + expr + n2) * 100)/100;
    this.setState({n1: n1, n2 : n2, expr: expr, answer: answer});
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.gameTopLayout]}>
          <View style={[styles.progressBar]}>
            <Text style={[styles.score]}>{this.state.time}</Text>
          </View>
          <View style={{marginRight: 5}}>
            <Text style={[styles.score]}>Score: {this.state.score}</Text>
          </View>
        </View>
        <View style={[styles.gameLayout]}>
          <Text style={[styles.question]}> {this.state.n1} {this.state.expr} {this.state.n2} </Text>
          <Text style={[styles.question]}> = </Text>
          <View style={[styles.answerLayout]}>
            <Text style={[styles.answer]}> {this.state.userAnswer} </Text>
          </View>
        </View>
        <View style={[styles.buttonLayout], {marginTop: 20}}>
          <View style={[styles.buttonRow]}>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(7)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View
                style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 7 </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(8)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 8 </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(9)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 9 </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(4)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 4 </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(5)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 5 </Text>

              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(6)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 6 </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(1)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 1 </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(2)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 2 </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(3)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 3 </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton(0)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> 0 </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton('.')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonValue]}> . </Text>

              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.onPressButton('*')}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.button]}>
                <Image
                  source={require('../images/delete.png')}
                />
              </View>
            </TouchableNativeFeedback>
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
    fontFamily: Fonts.OpenSansRegular,
    fontSize: 20
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
    fontSize: 30,
  },
  answerLayout: {
    backgroundColor: '#fff',
    padding: 5,
    minWidth: 200,
    minHeight: 50
  },
  answer: {
    color: '#383547',
    textAlign: 'center',
    fontSize: 30
  },
  buttonLayout: {
    flex: 1
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonValue: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#444153',
    height: 50,
    margin: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
