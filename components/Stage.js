import React from 'react';
import Amplify from 'aws-amplify';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

export default class Stage extends React.Component {
  render() {
    return (
      <View style={{width: this.props.width, height: 50, backgroundColor: 'powderblue'}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
