import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Navigator,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native'

import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming'

const url = "http://streams.95bfm.com/stream95"
ReactNativeAudioStreaming.pause()
ReactNativeAudioStreaming.resume()
ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true})
ReactNativeAudioStreaming.stop()

export default class BFM extends Component {
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
        <TouchableOpacity onPress={() => { this._onPress() }}>
        <Image
          style={{height: 450, width: 300}}
          source={require('../img/bfmfull.png')}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
