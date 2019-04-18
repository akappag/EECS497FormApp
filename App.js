import React from 'react'
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { Icon } from 'native-base'
import AuthLoadingScreen from './components/screens/AuthLoadingScreen'
import WelcomeScreen from './components/screens/WelcomeScreen'
import SignUpScreen from './components/screens/SignUpScreen'
import SignInScreen from './components/screens/SignInScreen'
import ForgetPasswordScreen from './components/screens/ForgetPasswordScreen'
import FormationScreen from './components/screens/FormationScreen'
import SettingsScreen from './components/screens/SettingsScreen'

Amplify.configure(awsmobile);

// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})
// App tabs located at the bottom of the screen
const AppTabNavigator = createBottomTabNavigator({
  Formation: {
    screen: FormationScreen
  },
  Settings: {
    screen: SettingsScreen
  },
})

AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } =   navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}

const AppStackNavigator = createStackNavigator({
  Header: {
    screen: AppTabNavigator,
    // Set the header icon
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24}/>
          </View>
        </TouchableOpacity>
      )
    })
  }
})

// App stack for the drawer
const AppDrawerNavigator = createDrawerNavigator({
  Tabs: AppStackNavigator,
  Formation: FormationScreen,
  Settings: SettingsScreen
})

const AppNavigator = createSwitchNavigator({
  // screen: name
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
