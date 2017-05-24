import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';

export default class Bounce extends Component {

    constructor(props) {
        super(props);
        this.animationConfig = {
            toValue: 1.0,
            duration: 200,
        }
        this.state = {
            bounceValue : new Animated.Value(0),
        }
        this.animation = Animated.timing(this.state.bounceValue, this.animationConfig);
    }

    render() {
        let windowWidth = Dimensions.get('window').width;
        let containerPosition = {
            transform: [
                {scale: this.state.bounceValue},
            ],
        }
        console.log('==== this.props.score====', this.props);
        return (
            <Animated.View style={[containerPosition]}>
                <Text style={styles.score}>
                    {this.props.score}
                </Text>
            </Animated.View>
        );
    }

    componentDidUpdate() {
        this.bounce();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.scored === true && nextProps.scored !== this.props.scored;
    }

    componentDidMount() {
        this.bounce();
    }

    bounce() {
        this.state.bounceValue.setValue(0.5);
        this.animation.start();
    }
}

const styles = StyleSheet.create({
    score: {
        fontSize: 100,
        fontWeight: '100',
        flex: 1,
        color: '#fff'
    }
});
