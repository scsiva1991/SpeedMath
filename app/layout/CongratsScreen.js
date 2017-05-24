import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

import Colors from '../util/Colors';
import Fonts from '../util/Fonts';
import Constants from '../util/Constants';
import AsyncStorage from '../util/AsyncStorage';
import { NavigationActions } from 'react-navigation';

export default class CongratsScreen extends Component {

  navigateToHome = ( screenName ) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ screenName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const {navigate} = this.props.navigation;
    return(
      <ScrollView style={[styles.container]}>
        <View>
          <Text style={[styles.successText]}> Congratulations! </Text>
          <Text style={[styles.successMessage]}> Your total score for this round is</Text>
          <Text style={[styles.score]}> {navigate.params.score} </Text>
          { navigate.params.isHighScore &&
            <View>
              <Text style={[styles.successMessage]}> New Best Score! </Text>
              <Image source={require('../images/winner.png')} style={[styles.icon_center, styles.margin_10]}></Image>
            </View>
          }
          <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()} style={{marginTop: 20}}
          onPress={() => navigate('GameScreen')}>
            <Image source={require('../images/reload_icon.png')} style={[styles.icon_center, styles.margin_10]}></Image>
          </TouchableNativeFeedback>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => navigateToHome('HomeScreen')}>
              <Image
                source={require('../images/home_icon.png')}
                style={{ margin: 5 }}
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => navigateToHome('SettingsScreen')}>
              <Image
                source={require('../images/settings_icon.png')}
                style={{ margin: 5 }}
              />
            </TouchableNativeFeedback>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#444153',
  },
  successText : {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: Fonts.OpenSansRegular,
    margin: 10,
    marginTop: 50
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
  icon_center : {
    alignSelf: 'center'
  },
  margin_10 : {
    margin: 10
  }
})
