import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTailwind } from 'tailwind-rn/dist'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuiz } from '../actions/questionsAction'
import { createAnswers } from '../actions/choiceAction'

const Home = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const {quizs, quiz, quizSuccess, quizError} = useSelector(state => state.QUESTIONS)
  const {result, resultSuccess, resultError} = useSelector(state => state.ANSWERS)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const loadQuestions = useCallback( async () => {
    try {
      await dispatch(getAllQuiz())
    } catch (err) {
      setIsError(true)
    }
  }, [dispatch])

  const loadAnswers = useCallback(async () => {
   await  dispatch(createAnswers())
}, [])

  useEffect(() => {
    setIsLoading(true)
    loadQuestions().then(() => loadAnswers()).then(() => setIsLoading(false))
    .then(() => console.log(result))
  }, [dispatch, setIsLoading])

//   {
//     "questionId": 1,
//     "isCorrect": false
// }

  const tw = useTailwind()

  if(isLoading) {
    return <ActivityIndicator size="large" color="blue"></ActivityIndicator>
  }

  return (
    <SafeAreaView style={tw('flex-1 items-center justify-center')}>
      <TouchableOpacity onPress={() => navigation.navigate("quiz")} style={tw('py-2 px-4 rounded-full bg-sky-500')}>
        <Text style={tw('text-white font-bold text-2xl')}>Start Quiz</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})