import React from 'react';
import Amplify from 'aws-amplify';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Resizable, ResizableBox } from 'react-resizable';

const Resizable = require('react-resizable').Resizable; // or,
const ResizableBox = require('react-resizable').ResizableBox;

export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50,
      height: 50
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>User Screen</Text>
        <Input
          placeholder='Width'
        />
        <Input
          placeholder='Height'
        />
        <Button
          title="Login"
        />
        <ResizableBox width={200} height={200} draggableOpts={{...}}
            minConstraints={[100, 100]} maxConstraints={[300, 300]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  stage : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
