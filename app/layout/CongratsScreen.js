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

  navigateToHome = ( routeName: string ) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    console.log('===== params ====', params);
    this.setState({ isHighScore: params.isHighScore, score: params.score});

    if( params.score > 0 ) {
      this.setState({ title: 'Congratulations! '});
    } else {
      this.setState({ title: 'Sorry!! You could have done better '});
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    //console.log('--- congrats navigate ---', navigate);
    return(
      <ScrollView style={[styles.container]}>
        <View>
          <Text style={[styles.successText]}> {this.state.title}  </Text>
          <Text style={[styles.successMessage]}> Your total score for this round is</Text>
          <Text style={[styles.score]}> {this.state.score} </Text>
          { this.state.isHighScore &&
            <View>
              <Text style={[styles.successMessage]}> New Best Score! </Text>
              <Image source={require('../images/winner.png')}
              style={[styles.icon_center, styles.margin_10], {height: 100, width: 100, alignSelf: 'center'}}></Image>
            </View>
          }
          <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()} style={{marginTop: 20}}
          onPress={() => navigate('GameScreen')}>
            <Image source={require('../images/reload_icon_1.png')} style={[styles.icon_center, styles.margin_10]}></Image>
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
            onPress={() => this.navigateToHome('MainScreen')}>
              <Image
                source={require('../images/home_icon.png')}
                style={{ margin: 5 }}
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => navigate('SettingsScreen')}>
              <Image
                source={require('../images/settings_icon.png')}
                style={{ margin: 5, marginLeft: 50}}
              />
            </TouchableNativeFeedback>
          </View>
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
    fontSize: 35,
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
