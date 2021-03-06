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
  Animated
} from 'react-native'
import {
  Container,
  Item,
  Input,
  Icon
} from 'native-base'
import Auth from '@aws-amplify/auth'

export default class ForgetPasswordScreen extends React.Component {
  state = {
    username: '',
    authCode: '',
    newPassword: '',
  }
  onChangeText(key, value) {
    this.setState({[key]: value})
  }

  // Request a new password
  async forgotPassword() {
    const { username } = this.state
    await Auth.forgotPassword(username)
    .then(data => console.log('New code sent', data))
    .catch(err => {
      if (! err.message) {
        console.log('Error while setting up the new password: ', err)
        Alert.alert('Error while setting up the new password: ', err)
      } else {
        console.log('Error while setting up the new password: ', err.message)
        Alert.alert('Error while setting up the new password: ', err.message)
      }
    })
  }

  // Upon confirmation redirect the user to the Sign In page
  async forgotPasswordSubmit() {
    const { username, authCode, newPassword } = this.state
    await Auth.forgotPasswordSubmit(username, authCode, newPassword)
    .then(() => {
      this.props.navigation.navigate('SignIn')
      console.log('the New password submitted successfully')
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error while confirming the new password: ', err)
        Alert.alert('Error while confirming the new password: ', err)
      } else {
        console.log('Error while confirming the new password: ', err.message)
        Alert.alert('Error while confirming the new password: ', err.message)
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
         enabled
         keyboardVerticalOffset={23}>
         <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
           <View style={styles.container}>
             {/* Infos */}
             <Container style={styles.infoContainer}>
               <View style={styles.container}>
                 {/* Username */}
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
                     returnKeyType='go'
                     autoCapitalize='none'
                     autoCorrect={false}
                     onChangeText={value => this.onChangeText('username', value)}
                   />
                 </Item>
                 <TouchableOpacity
                   style={styles.buttonStyle}
                   onPress={() => this.forgotPassword()}>
                   <Text style={styles.buttonText}>
                     Send Code
                   </Text>
                 </TouchableOpacity>
                 {/* the New password section  */}
                 <Item rounded style={styles.itemStyle}>
                   <Icon
                     active
                     name='lock'
                     style={styles.iconStyle}
                   />
                   <Input
                     style={styles.input}
                     placeholder='New password'
                     placeholderTextColor='#adb4bc'
                     returnKeyType='next'
                     autoCapitalize='none'
                     autoCorrect={false}
                     secureTextEntry={true}
                     onSubmitEditing={(event) => { this.refs.SecondInput._root.focus()}}
                     onChangeText={value => this.onChangeText('newPassword', value)}
                   />
                 </Item>
                 {/* Code confirmation section  */}
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
                     ref='SecondInput'
                     onChangeText={value => this.onChangeText('authCode', value)}
                   />
                 </Item>
                 <TouchableOpacity
                   style={styles.buttonStyle}
                   onPress={() => this.forgotPasswordSubmit()}>
                   <Text style={styles.buttonText}>
                     Confirm the new password
                   </Text>
                 </TouchableOpacity>
               </View>
             </Container>
           </View>
         </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
     </SafeAreaView>
   );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33F1FF',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5a52a5',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#33F1FF',
  },
  itemStyle: {
    marginBottom: 20,
  },
  iconStyle: {
    color: '#5a52a5',
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
