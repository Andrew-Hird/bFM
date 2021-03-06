import React, { Component } from 'react'
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
  WebView,
} from 'react-native'

import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming'

import Spinner from 'react-native-loading-spinner-overlay'

const url = "http://streams.95bfm.com/stream95"
ReactNativeAudioStreaming.pause()
ReactNativeAudioStreaming.resume()
ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true})
ReactNativeAudioStreaming.stop()


export default class bFMPlayer extends Component {

  renderScene(route, navigator) {
  	if(route.name == 'tipped') {
    	return <Main navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'Bcasts') {
    	return <Bcasts navigator={navigator} {...route.passProps}  />
    }
  }

  render() {
    return (
      <Navigator
      	style={{ flex:1 }}
        initialRoute={{ name: 'tipped' }}
        renderScene={ this.renderScene } />
    )
  }
}

export class Main extends Component {
  constructor(props){
    super(props)
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

  _navigateBcasts() {
  	this.props.navigator.push({ name: 'Bcasts' })
  }
  render() {
    return (

      	<View style={ styles.container }>

   				<TouchableHighlight style={ styles.nav } onPress={ () => this._navigateBcasts() }>
        		<Text style={ styles.navText }>bCasts</Text>
        	</TouchableHighlight>

          <View style={styles.container}>
            <TouchableOpacity onPress={() => { this._onPress() }}>
            <Image
              style={{height: 400, width: 270}}
              source={require('./img/bfmfull.png')}
            />
            </TouchableOpacity>
            { this.state.status ? <Results /> : null }

          </View>

        </View>
    )
  }
}

export class Results extends Component {
  render() {
    return (
      <Image
        style={{height: 50, width: 50, marginTop: 5}}
        source={require('./img/stop.png')}
      />
    )
  }
}

export class Bcasts extends Component {

  constructor(props) {
    super()
    this.state = {
      visible: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: !this.state.visible
      })
    }, 3000)
  }

  _navigate() {
  	this.props.navigator.push({ name: 'tipped' })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e70d27' }}>

      <Spinner visible={this.state.visible} />

      <TouchableHighlight style={ styles.back } onPress={ () => this._navigate() }>
        <Text style={ styles.navText }> back </Text>
      </TouchableHighlight>

        <WebView
          source={{uri: 'http://95bfm.com/bcasts'}}
          style={{marginTop: 5, flex: 9}}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e70d27',
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
  home: {
    flex: 9
  },
  nav: {
    marginTop: 20,
    // flex: 1,
    height: 55,
    backgroundColor: '#151313',
    width: 300,
    justifyContent: 'center',
    borderRadius: 20
  },
  back: {
    marginTop: 20,
    marginLeft: 5,
    // flex: 1,
    height: 55,
    backgroundColor: '#151313',
    width: 100,
    justifyContent: 'center',
    borderRadius: 20
  },
  navText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  }
})


AppRegistry.registerComponent('bFMPlayer', () => bFMPlayer)
