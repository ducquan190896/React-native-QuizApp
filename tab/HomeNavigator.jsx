import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import QuizScreen from '../screens/QuizScreen'

const stack = createNativeStackNavigator()
const HomeNavigator = () => {
  return (
    <stack.Navigator>
        <stack.Screen component={Home} name="home"  options={{headerShown: false}}></stack.Screen>
        <stack.Screen component={QuizScreen} name="quiz" options={{headerShown: false}}></stack.Screen>
    </stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})