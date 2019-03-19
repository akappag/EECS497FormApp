import React from 'react';
import { Header } from 'react-native-elements';
import { Button } from 'react-native';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import * as FileSystem from 'expo-file-system';

import { MonoText } from '../components/StyledText';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'FORMATIONS', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
         <View style={styles.FormButton}>
            <Button title="Formation 1" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 2" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 3" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 4" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 5" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 6" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 7" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 8" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 9" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 10" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 11" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 12" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 13" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 14" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 15" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 16" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 17" />
         </View>
         <View style={styles.FormButton}>
            <Button title="Formation 18" />
         </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      backgroundColor: 'grey',
      alignItems: 'center',
      height: 1000,
   },
  FormButton: {
    backgroundColor:'white',
    color: 'blue',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: 1000,
    height: 50,
  },
});
