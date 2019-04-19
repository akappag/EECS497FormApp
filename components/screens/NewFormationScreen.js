import React from 'react';
import Amplify from 'aws-amplify';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default class NewFormationScreen extends React.Component {
  state = {
    name: '',
    length: 0,
    width: 0,
  }

  onChangeText(key, value) {
    this.setState({[key]: value})
  }

  createFormation = async () => {
    console.log("Created formation")
  }

  createFormationAlert = async () => {
    await Alert.alert(
      'Create Formation',
      'Are you sure you want to create this formation?',
      [
        {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
        // Calling signOut
        {text: 'OK', onPress: () => this.createFormation()},
      ],
      { cancelable: false }
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>New Formation Screen</Text>
        <Input
          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#adb4bc'
          returnKeyType='go'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={value => this.onChangeText('name', value)}
        />
        <Input
          style={styles.input}
          placeholder='Length'
          placeholderTextColor='#adb4bc'
          returnKeyType='go'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          ref='SecondInput'
          onChangeText={value => this.onChangeText('length', value)}
        />
        <Input
          style={styles.input}
          placeholder='Width'
          placeholderTextColor='#adb4bc'
          returnKeyType='go'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          ref='ThirdInput'
          onChangeText={value => this.onChangeText('width', value)}
        />
        <TouchableOpacity
         style={
           [styles.buttonStyle,
             {
               flexDirection: 'row',
               justifyContent: 'center',
               marginBottom: 30
             }
           ]
         }
         onPress={this.createFormationAlert}>
         <Text style={styles.buttonText}>
           Create Formation
         </Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5a52a5',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#667292',
    padding: 14,
    marginBottom: 20,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  },
});
