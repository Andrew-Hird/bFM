import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  WebView,
} from 'react-native'

export default class BCasts extends Component {

  render() {
    return (
      <WebView
        source={{uri: 'http://95bfm.com/bcasts'}}
        style={{marginTop: 20}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cf2529',
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
