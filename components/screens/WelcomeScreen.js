import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'

export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImg} source={require('../../images/wilderness.jpg')} ></ImageBackground>
          <View style={styles.newOverlay} >
            <Image style={styles.imgStyle} source={require('../../images/logo.png')} />
            <Text style={styles.welcomeMessage}>Welcome to the easiest to use Formations Maker!{"\n"}
            Click below to Sign Up and get started on your formations adventures!</Text>
            <View style={styles.innerContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignIn')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForgetPassword')}
                style={styles.fgButtonStyle}>
                <Text style={styles.textStyle}>Forget password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    backgroundColor: '#DDDDDD',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeMessage: {
    marginTop: 25,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  imgStyle: {
    marginTop: 25,
    height: 150,
    width: 200
  },
  innerContainer: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 50,
    width: 300
  },
  buttonStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:15,
    marginRight:15,
    backgroundColor:'#53BBBD',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#53BBBD',
    padding: 20,
  },
  fgButtonStyle: {
    marginTop: 5,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#53BBBD',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#53BBBD',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: '#FFFFFF',
    padding: 10,
    textAlign: 'center',
  }
})
