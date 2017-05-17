import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

export default class BestScoresScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores1: [1, 23, 567],
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#383547',
        }}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}> Best Scores </Text>
        </View>
        <ScrollView style={{ marginTop: 30 }}>
          <View style={[styles.menuBorder]}>
            <Text style={[styles.menuText]}>
              EASY
            </Text>

            <FlatList
              data={this.state.scores1}
              renderItem={({ item, index }) => (
                <Text style={[styles.score]}>{index + 1} {') '} {item}</Text>
              )}
            />
          </View>
          <View style={[styles.menuBorder]}>
            <Text style={[styles.menuText]}>
              MEDIUM
            </Text>
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item, index }) => (
                <Text style={[styles.score]}>{index + 1} {') '} {item}</Text>
              )}
            />
          </View>
          <View style={[styles.menuBorder]}>
            <Text style={[styles.menuText]}>
              HARD
            </Text>
            <FlatList
              data={[1, 2, 3]}
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
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#fff',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
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
