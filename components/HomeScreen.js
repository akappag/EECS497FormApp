import React from 'react';
import Amplify from 'aws-amplify';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FormApp Home Screen</Text>
        <Input
          placeholder='Username'
        />
        <Input
          placeholder='Password'
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('User')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
