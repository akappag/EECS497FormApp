import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Animated,
  ImageBackground
} from 'react-native'

import {
  Container,
  Item,
  Input,
  Icon
} from 'native-base'
import Auth from '@aws-amplify/auth'

export default class SignInScreen extends React.Component {
  state = {
    username: '',
    password: '',
  }
  onChangeText(key, value) {
    this.setState({[key]: value})
  }

  // Sign in users with Auth
  async signIn() {
    const { username, password } = this.state
    await Auth.signIn(username, password)
    .then(user => {
      this.setState({ user })
      this.props.navigation.navigate('AuthLoading')
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when signing in: ', err)
        Alert.alert('Error when signing in: ', err)
      } else {
        console.log('Error when signing in: ', err.message)
        Alert.alert('Error when signing in: ', err.message)
      }
    })
  }

  render() {
   return (
     <SafeAreaView style={styles.container}>
       <StatusBar/>
       <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
       <ImageBackground style={styles.backgroundImg} source={require('../../images/wilderness.jpg')} ></ImageBackground>
         <View style={styles.newOverlay} >
           <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
             <View style={styles.container}>
               <Container style={styles.infoContainer}>
                 <View style={styles.container}>
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
                       returnKeyType='go'
                       autoCapitalize='none'
                       autoCorrect={false}
                       secureTextEntry={true}
                       ref='SecondInput'
                       onChangeText={value => this.onChangeText('password', value)}
                     />
                   </Item>
                   <TouchableOpacity
                     onPress={() => this.signIn()}
                     style={styles.buttonStyle}>
                     <Text style={styles.buttonText}>
                       Sign In
                     </Text>
                   </TouchableOpacity>
                 </View>
               </Container>
             </View>
           </TouchableWithoutFeedback>
         </View>
       </KeyboardAvoidingView>
     </SafeAreaView>
   )
 }
}

const styles = StyleSheet.create({
  backgroundImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: 800,
    width: 600,
  },
  newOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoContainer: {
    backgroundColor: 'transparent',
    width: 400,
    height: 800,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  itemStyle: {
    marginBottom: 20,
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
    marginBottom: 20,
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
    height: 400,
    bottom: 180,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
