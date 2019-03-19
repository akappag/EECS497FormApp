import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { ScreenOrientation } from 'expo';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33F1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
