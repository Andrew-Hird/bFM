import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Switch,
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
  constructor(props){
    super(props);
    this.state = {
      status: false
    }
  }

  _onPress () {
    let newState = !(this.state.status)
    this.setState({status: newState})
    if (this.state.status) {
      ReactNativeAudioStreaming.stop()
    } else {
      ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true})
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => { this._onPress() }}>
      <Image
        style={styles.button}
        source={require('./img/bfm_full.png')}
      />
      </TouchableHighlight>
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
