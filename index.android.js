/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { NativeModules } from 'react-native';
module.exports = NativeModules.ToastAndroid;

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    thumbnail: {
      width: 100,
      height: 120,
    },
});

var movie ={title: 'Title', year: '2015', posters: 'http://picapi.ooopic.com/10/63/36/39b1OOOPICa3.jpg'};

import ToastAndroid from './ToastAndroid';

ToastAndroid.show('Awesome', ToastAndroid.SHORT);

class ReactDemo extends Component {
  render() {
    return (


      <View style={[styles.container,{flexDirection:'row'}]}>
      <Image style={styles.thumbnail} source={{uri: movie.posters }} />
      <View style={{flexDirection:'column'}}>
      <Text>{movie.title}</Text>
      <Text>{movie.year}</Text>
      </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
