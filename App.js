import React from 'react'

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import LoginScreen from './screens/LoginScreen'
import OnboardingScreen from './screens/OnboardingScreen'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const AppStack  = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode = "none"
      >
        <AppStack.Screen name="Onboarding" component = {OnboardingScreen} />
        <AppStack.Screen name="login" component = {LoginScreen}/>     
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App