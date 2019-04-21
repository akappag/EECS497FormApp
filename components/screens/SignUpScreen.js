import React from 'react'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert,
  Modal,
  FlatList,
  Animated,
  ImageBackground,
  ScrollView
} from 'react-native'

import {
  Container,
  Item,
  Input,
  Icon
} from 'native-base'
import Auth from '@aws-amplify/auth'

export default class SignUpScreen extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    authCode: '',
  }
  onChangeText(key, value) {
    this.setState({[key]: value})
  }

  // Sign up user with AWS Amplify Auth
  async signUp() {
    const { username, password, email, phoneNumber } = this.state
    // rename variable to conform with Amplify Auth field phone attribute
    const phone_number = phoneNumber
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number }
    })
    .then(() => {
      console.log('sign up successful!')
      Alert.alert('Enter the confirmation code you received.')
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when signing up: ', err)
        Alert.alert('Error when signing up: ', err)
      } else {
        console.log('Error when signing up: ', err.message)
        Alert.alert('Error when signing up: ', err.message)
      }
    })
  }

  // Confirm users and redirect them to the SignIn page
  async confirmSignUp() {
    const { username, authCode } = this.state
    await Auth.confirmSignUp(username, authCode)
    .then(() => {
      this.props.navigation.navigate('SignIn')
      console.log('Confirm sign up successful')
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when entering confirmation code: ', err)
        Alert.alert('Error when entering confirmation code: ', err)
      } else {
        console.log('Error when entering confirmation code: ', err.message)
        Alert.alert('Error when entering confirmation code: ', err.message)
      }
    })
  }

  // Resend code if not received already
  async resendSignUp() {
    const { username } = this.state
    await Auth.resendSignUp(username)
    .then(() => console.log('Confirmation code resent successfully'))
    .catch(err => {
      if (! err.message) {
        console.log('Error requesting new confirmation code: ', err)
        Alert.alert('Error requesting new confirmation code: ', err)
      } else {
        console.log('Error requesting new confirmation code: ', err.message)
        Alert.alert('Error requesting new confirmation code: ', err.message)
      }
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
          enabled>
          <ScrollView>
            <View style={styles.container}>
              <ImageBackground style={styles.backgroundImg} source={require('../../images/wilderness.jpg')} ></ImageBackground>
              <View style={styles.newOverlay} >
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                  <View style={styles.container}>
                    <Container style={styles.infoContainer}>
                      <View style={styles.container}>
                        {/* username section  */}
                        <Item rounded style={styles.itemStyle}>
                          <Icon
                            active
                            name='person'
                            style={styles.iconStyle}
                          />
                          <Input
                            style={styles.input}
                            placeholder='Username'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'email-address'}
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                            onChangeText={value => this.onChangeText('username', value)}
                          />
                        </Item>
                        {/*  password section  */}
                        <Item rounded style={styles.itemStyle}>
                          <Icon
                            active
                            name='lock'
                            style={styles.iconStyle}
                          />
                          <Input
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='#adb4bc'
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            // ref={c => this.SecondInput = c}
                            ref='SecondInput'
                            onSubmitEditing={(event) => {this.refs.ThirdInput._root.focus()}}
                            onChangeText={value => this.onChangeText('password', value)}
                          />
                        </Item>
                        {/* email section */}
                        <Item rounded style={styles.itemStyle}>
                          <Icon
                            active
                            name='mail'
                            style={styles.iconStyle}
                          />
                          <Input
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'email-address'}
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            ref='ThirdInput'
                            onSubmitEditing={(event) => {this.refs.FourthInput._root.focus()}}
                            onChangeText={value => this.onChangeText('email', value)}
                          />
                        </Item>
                        {/* phone section  */}
                        <Item rounded style={styles.itemStyle}>
                          <Icon
                            active
                            name='call'
                            style={styles.iconStyle}
                          />
                          <Input
                            style={styles.input}
                            placeholder='+44766554433'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'phone-pad'}
                            returnKeyType='done'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            ref='FourthInput'
                            value={this.state.phoneNumber}
                            onChangeText={(val) => this.onChangeText('phoneNumber', val)}
                          />
                        </Item>
                        {/* End of phone input */}
                        <TouchableOpacity
                          style={styles.buttonStyle}
                          onPress={() => this.signUp()}>
                          <Text style={styles.buttonText}>
                            Sign Up
                          </Text>
                        </TouchableOpacity>
                        {/* code confirmation section  */}
                        <Item rounded style={styles.itemStyle}>
                          <Icon
                            active
                            name='md-apps'
                            style={styles.iconStyle}
                          />
                          <Input
                            style={styles.input}
                            placeholder='Confirmation code'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'numeric'}
                            returnKeyType='done'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            onChangeText={value => this.onChangeText('authCode', value)}
                          />
                        </Item>
                        <TouchableOpacity
                          style={styles.buttonStyle}
                          onPress={() => this.confirmSignUp()}>
                          <Text style={styles.buttonText}>
                            Confirm Sign Up
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.buttonStyle}
                          onPress={() => this.resendSignUp()}>
                          <Text style={styles.buttonText}>
                            Resend code
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Container>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  newOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  backgroundImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    height: 800,
    width: 600
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    height: 25 /*for some reason this fixs first input touch problem*/
  },
  infoContainer: {
    backgroundColor: 'transparent',
    zIndex: 1,
    flex: 1,
    height: 800,
    width: 400,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  itemStyle: {
    marginBottom: 10,
  },
  iconStyle: {
    color: '#FFFFFF',
    fontSize: 28,
    marginLeft: 15
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#667292',
    padding: 14,
    marginBottom: 10,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 600,
    bottom: 270,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    padding: 5,
    fontSize: 18
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#99ff',
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#211f',
    backgroundColor: '#fff3',
  }
})
