import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { useTailwind } from 'tailwind-rn/dist'

const ResultScreen = () => {
  const {quizs, quiz, quizSuccess, quizError} = useSelector(state => state.QUESTIONS)
    const {result, resultSuccess, resultError} = useSelector(state => state.ANSWERS)
  const tw = useTailwind()

  return (
    <SafeAreaView style={tw('flex-1 items-center justify-center')}>
      <Text style={tw('text-2xl font-bold text-green-500')}>your score is {result && result.score ? result.score : 0}/{quizs && quizs.length}</Text>
    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({})