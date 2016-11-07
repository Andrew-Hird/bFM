/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';

const url = "http://streams.95bfm.com/stream95";
ReactNativeAudioStreaming.pause();
ReactNativeAudioStreaming.resume();
ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
ReactNativeAudioStreaming.stop();

export default class bFMPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
        source={require('./img/bfm.png')}
      />
        <Text style={styles.welcome}>
          Click below to stream
        </Text>
        <Player url={url} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('bFMPlayer', () => bFMPlayer);
