import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

import Constants from '../util/Constants';

export default class GameScreen extends Component {

  constructor(props) {
    super();
    this.state = { n1: 0, n2:0, answer: 0, userAnswer: '', expr: '', mode : Constants.EASY };
  }

  componentWillMount() {
     this.setState({ mode: this.props.mode });
     this.setQuestion();
  }

  onPressButton = () => {
    if(parseFloat(this.state.userAnswer+i) == this.state.answer) {
      this.setState({score: this.state.score + 1, userAnswer: ''});
      this.setQuestion();
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

  setQuestion() {
    let n1 = 0, n2 = 0;
    let exprArr = Constants.EXPRESSIONS;
    let expr = exprArr[ Math.floor(Math.random() * exprArr.length)];
    let answer = 0;

    if( this.state.mode == Constants.EASY ) {
      n1 = Math.floor(Math.random() * Constants.EASY_NUM2) + 1;
      n2 = Math.floor(Math.random() * n1) + 1;
      answer = Number(eval( n1 + expr + n2)).toFixed(2);
    } else if( this.state.mode == Constants.MEDIUM ) {
      n1 = Math.floor(Math.random() * Constants.MEDIUM_NUM2) + 1;
      n2 = Math.floor(Math.random() * n1) + 1;
      answer = Number(eval( n1 + expr + n2)).toFixed(2);
    } else {
      n1 = Math.floor(Math.random() * Constants.HARD_NUM2) + 1;
      n2 = Math.floor(Math.random() * n1) + 1;
      answer = Number(eval( n1 + expr + n2)).toFixed(2);
    }
    this.setState({n1: n1, n2 : n2, expr: expr, answer: answer}); 
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.gameTopLayout]}>
          <View style={[styles.progressBar]}>
            <Text>progressBar</Text>
          </View>
          <View style={{marginRight: 5}}>
            <Text style={{color: '#fff'}}>Score: 0</Text>
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
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(7)}>
              <View>
                <Text style={[styles.buttonValue]}> 7 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(8)}>
              <View>
                <Text style={[styles.buttonValue]}> 8 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(9)}>
              <View>
                <Text style={[styles.buttonValue]}> 9 </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(4)}>
              <View>
                <Text style={[styles.buttonValue]}> 4 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(5)}>
              <View>
                <Text style={[styles.buttonValue]}> 5 </Text>

              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(6)}>
              <View>
                <Text style={[styles.buttonValue]}> 6 </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(1)}>
              <View>
                <Text style={[styles.buttonValue]}> 1 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(2)}>
              <View>
                <Text style={[styles.buttonValue]}> 2 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(3)}>
              <View>
                <Text style={[styles.buttonValue]}> 3 </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[styles.buttonRow]}>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton(0)}>
              <View>
                <Text style={[styles.buttonValue]}> 0 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton('.')}>
              <View>
                <Text style={[styles.buttonValue]}> . </Text>

              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button]}
              onPress={() => this.onPressButton('*')}>
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
    minWidth: 200,
    minHeight: 50
  },
  answer: {
    color: '#383547',
    textAlign: 'center',
    fontSize: 20
  },
  buttonLayout: {},
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
