import React, { Component } from 'react';
import {
        Text,
        View,
        StyleSheet,
        Slider,
        ScrollView,
        TouchableNativeFeedback,
        Image,
        ToastAndroid
      } from 'react-native';

import AsyncStorage from '../util/AsyncStorage';
import Constants from '../util/Constants';
import Fonts from '../util/Fonts';
import { NavigationActions } from 'react-navigation';

export default class SettingsScreen extends Component {
  componentWillMount() {
    this.setState({ v1: 5000, v2: 3000, v3: 1000, v4: 100, v5: 90 });
    AsyncStorage.getJsonObject(Constants.KEY_SPEED_MATH, (result) => {

      if( result != null ) {
        this.setState({
          v1: result.RANGES[0],
          v2: result.RANGES[1],
          v3: result.RANGES[2],
          v4: result.RANGES[3],
          v5: result.DURATION,
          v6: result.HIGH_SCORES
        })
      }
    });
  }

  navigateToHome = ( routeName: string ) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  save() {
    const rangeArr = [this.state.v1, this.state.v2, this.state.v3, this.state.v4];
    AsyncStorage.saveJSONValues( Constants.KEY_SPEED_MATH, {
      'RANGES' : rangeArr,
      'DURATION' : this.state.v5,
      'HIGH_SCORES' : this.state.v6
    });
    ToastAndroid.showWithGravity('Settings Saved Succesfully!!',
    ToastAndroid.SHORT,
    ToastAndroid.TOP)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#444153',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',
                      height: 60, alignItems: 'center', borderBottomWidth: 1,
                      borderBottomColor: '#fff'}}>
          <TouchableNativeFeedback
            onPress={() => this.navigateToHome('MainScreen')}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={{marginLeft: 5}}>
              <Text style={{color: '#fff',
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 10,
              padding: 5,
              textAlign: 'center',
              fontSize: 12}}>
                HOME
              </Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={[styles.headerText]}> SETTINGS </Text>
          <TouchableNativeFeedback
            onPress={() => this.save()}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={{marginRight: 5}}>
              <Text style={{color: '#fff',
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 10,
              padding: 5,
              textAlign: 'center',
              fontSize: 12}}>
                SAVE
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <ScrollView style={{marginTop: 10}}>
          <View style={[styles.card]}>
            <Text style={{ color: '#fff' }}> Addition </Text>
            <View style={[styles.hr]} />
            <View>
              <Text style={styles.text}>
                Value Ranges from 1 to {this.state.v1}
              </Text>
              <Slider
                {...this.props}
                minimumValue={2}
                maximumValue={10000}
                step={100}
                value={this.state.v1}
                onValueChange={value => this.setState({ v1: value })}
              />
            </View>
          </View>
          <View style={[styles.card]}>
            <Text style={{ color: '#fff' }}> Subtraction </Text>
            <View style={[styles.hr]} />
            <View>
              <Text style={styles.text}>
                Value Ranges from 1 to {this.state.v2}
              </Text>
              <Slider
                {...this.props}
                minimumValue={2}
                maximumValue={10000}
                step={100}
                value={this.state.v2}
                onValueChange={value => this.setState({ v2: value })}
              />
            </View>
          </View>
          <View style={[styles.card]}>
            <Text style={{ color: '#fff' }}> Multiply </Text>
            <View style={{borderBottomColor: '#fff',
            borderBottomWidth: 0.5}} ></View>
            <View>
              <Text style={styles.text}>
                Value Ranges from 1 to {this.state.v3}
              </Text>
              <Slider
                {...this.props}
                minimumValue={2}
                maximumValue={10000}
                step={100}
                value={this.state.v3}
                onValueChange={value => this.setState({ v3: value })}
              />
            </View>
          </View>
          <View style={[styles.card]}>
            <Text style={{ color: '#fff' }}> Division </Text>
            <View style={{borderBottomColor: '#fff', borderBottomWidth: 0.25}}   />
            <View>
              <Text style={styles.text}>
                Value Ranges from 1 to {this.state.v4}
              </Text>
              <Slider
                {...this.props}
                minimumValue={2}
                maximumValue={10000}
                step={100}
                value={this.state.v4}
                onValueChange={value => this.setState({ v4: value })}
              />
            </View>
          </View>
          <View style={[styles.card]}>
            <Text style={{ color: '#fff' }}> Timer </Text>
            <View style={[styles.hr]} />
            <View>
              <Text style={styles.text}>
                {this.state.v5} seconds
              </Text>
              <Slider
                {...this.props}
                minimumValue={30}
                maximumValue={360}
                step={30}
                value={this.state.v5}
                onValueChange={value => this.setState({ v5: value })}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    color: '#fff',
    fontFamily: Fonts.OpenSansSemiboldItalic
  },
  header: {
    backgroundColor: '#444153',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 50,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#565464',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    padding: 5,
  },
  hr: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.25,
  },
});
