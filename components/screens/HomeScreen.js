import React from 'react';
import Amplify from 'aws-amplify';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  state = {
    name: '',
    length: 0,
    width: 0,
  }

  onChangeText(key, value) {
    this.setState({[key]: value})
  }

  onNewFormation = async () => {
    this.props.navigation.navigate('NewFormation')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>FormApp Home Screen</Text>
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
         onPress={this.onNewFormation}>
         <Text style={styles.buttonText}>
           New Formation
         </Text>
       </TouchableOpacity>
        <Text>List of formations</Text>
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
