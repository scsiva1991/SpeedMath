import React, { Component } from 'react';
import { Text, View, StyleSheet, Slider, ScrollView } from 'react-native';

export default class SettingsScreen extends Component {
  componentWillMount() {
    this.setState({ v1: 5000, v2: 3000, v3: 100, v4: 50, v5: 60 });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#444153',
        }}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}> Settings </Text>
        </View>
        <ScrollView>
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
            <Text style={{ color: '#fff' }}> Multiplication </Text>
            <View style={[styles.hr]} />
            <View>
              <Text style={styles.text}>
                Value Ranges from 1 to {this.state.v3}
              </Text>
              <Slider
                {...this.props}
                minimumValue={2}
                maximumValue={1000}
                step={10}
                value={this.state.v3}
                onValueChange={value => this.setState({ v3: value })}
              />
            </View>
          </View>
          <View style={[styles.card]}>
            <Text style={{ color: '#fff' }}> Division </Text>
            <View style={[styles.hr]} />
            <View>
              <Text style={styles.text}>
                Value Ranges from 1 to {this.state.v4}
              </Text>
              <Slider
                {...this.props}
                minimumValue={2}
                maximumValue={1000}
                step={10}
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
