import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

export default class CongratsScreen extends Component {
  render() {
    return(
      <ScrollView style={[styles.container]}>
        <View>
          <Text style={[styles.successText]}> Congratulations! </Text>
          <Text style={[styles.successMessage]}> Your total score for this round is</Text>
          <Text style={[styles.score]}> 8 </Text>
          <View>
            <Text style={[styles.successMessage]}> New Best Score! </Text>
            <Image source={require('../images/badge.png')} style={[styles.badge]}></Image>
          </View>
        </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#383547',
  },
  successText : {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Fonts.OpenSansRegular,
    margin: 10
  },
  successMessage : {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.OpenSansRegular,
    margin: 10
  },
  score : {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Fonts.OpenSansRegular,
    margin: 10
  },
  badge : {
    alignSelf: 'center',
    margin: 10
  }
})
