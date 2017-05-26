import React, {Component} from 'react';
import {
  View,
  Text,
  StylesSheet,
  Animated
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1 ,
        duration: 200
      }
    ).start()
  }

  render() {
    let containerPosition = {
        transform: [
            {scale: this.state.bounceValue},
        ],
    }
    return(
      <Animated.View
      style={{
        ...this.props.style
      },   [containerPosition]}>
        {this.props.children}
      </Animated.View>
    )
  }
}
