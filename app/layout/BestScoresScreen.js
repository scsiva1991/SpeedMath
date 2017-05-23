import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

export default class BestScoresScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    AsyncStorage.getJsonObject(Constants.KEY_SPEED_MATH, (result) => {
      if( result == null ) {
        this.setState({ scores: result.HIGH_SCORES });
      }
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#444153',
        }}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}> Best Scores </Text>
        </View>
        <ScrollView style={{ marginTop: 30 }}>
          <View style={[styles.menuBorder]}>

            <FlatList
              data={this.state.scores}
              renderItem={({ item, index }) => (
                <Text style={[styles.score]}>{index + 1} {') '} {item}</Text>
              )}
            />
          </View>

        </ScrollView>
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
  },
});
