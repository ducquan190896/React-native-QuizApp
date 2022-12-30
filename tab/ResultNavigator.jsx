import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ResultScreen from '../screens/ResultScreen'

const stack = createNativeStackNavigator()
const ResultNavigator = () => {
  return (
  <stack.Navigator>
    <stack.Screen name='Result' component={ResultScreen} ></stack.Screen>
  </stack.Navigator>
  )
}

export default ResultNavigator

const styles = StyleSheet.create({})