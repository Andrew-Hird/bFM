import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming'

const url = "http://streams.95bfm.com/stream95"
ReactNativeAudioStreaming.pause()
ReactNativeAudioStreaming.resume()
ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true})
ReactNativeAudioStreaming.stop()

export default class bFMPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => { ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true})}}>
      <Image
        style={styles.button}
        source={require('./img/bfm_full.png')}
      />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => { ReactNativeAudioStreaming.stop()}}>
      <Text style={styles.welcome}>
        Click here to stop
      </Text>
      </TouchableHighlight>
        {/* <Player url={url} /> */}
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
