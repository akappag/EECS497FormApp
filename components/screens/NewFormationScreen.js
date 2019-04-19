import React from 'react';
import Amplify, { API } from 'aws-amplify';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default class NewFormationScreen extends React.Component {
  state = {
    name: '',
    height: 0,
    width: 0,
    apiResponse: null
  }

  onChangeText(key, value) {
    this.setState({[key]: value})
  }

  createFormation = async () => {
    await this.saveForm();
    await this.getForm();
    console.log(this.state.apiResponse)
    console.log("Saved formation in database");
    this.props.navigation.navigate('Formation', {
        FormID: this.state.name,
        height: this.state.height,
        width: this.state.width
    });
  }

  async saveForm() {
    let newForm = {
        body: {
            'FormID': this.state.name,
            'Height': this.state.height,
            'Width': this.state.width,
            'FormCoords': []
        }
    }
    const path = '/Coordinates'

    try {
        const apiResponse = await API.put("CoordsCRUD", path, newForm)
        console.log("response from saving form: ");
        console.log(apiResponse);
        this.setState({apiResponse});
    } catch (e) {
        console.log(e);
    }
  }

  async getForm() {
      const path = '/Coordinates/' + this.state.FormID;
      try {
        const apiResponse = await API.get("CoordsCRUD", path);
        console.log("Response from getting Formation: ");
        console.log(apiResponse);
        this.setState({apiResponse});
      } catch (e) {
        console.log(e);
      }
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
          placeholder='Height'
          placeholderTextColor='#adb4bc'
          returnKeyType='go'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          ref='SecondInput'
          onChangeText={value => this.onChangeText('height', value)}
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
