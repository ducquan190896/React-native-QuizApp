import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTailwind } from 'tailwind-rn/dist'
import Quiz from '../components/Quiz'
import { Button } from '@rneui/base'
import { addAnswer, getAnswers } from '../actions/choiceAction'
import * as Progress from 'react-native-progress';

const QuizScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const tw = useTailwind()
  
    const {quizs, quiz, quizSuccess, quizError} = useSelector(state => state.QUESTIONS)
    const {result, resultSuccess, resultError} = useSelector(state => state.ANSWERS)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answer, setAnswer] = useState(null)

    const chooseAnswer = (option) => {
        setAnswer(option)
    }
    
    const loadanswers = useCallback(async () => {
        await dispatch(getAnswers(result.id))
    }, [dispatch, result])

    const nextButton = async () => {

     
        if(currentIndex < quizs.length - 1) {
          await dispatch(addAnswer(answer))
          console.log(answer)
          
            setCurrentIndex(prev => prev + 1)
            console.log(result);
            console.log(quizs[currentIndex])
        } else {
            navigation.navigate("resultNavigator", {screen: "Result"})
        }
       

    }
    const backButton = async () => {
      if(currentIndex> 0) {
        await dispatch(addAnswer(answer))
        console.log(answer)
        setCurrentIndex(prev => prev  - 1)
      } else {
        navigation.navigate("home");
      }
    }

    useEffect(() => {
        loadanswers()
    }, [ dispatch])
    useEffect(() => {
      console.log(quizs)
      console.log()
    }, [])


  return (
    <View style={tw('flex-1 bg-gray-200')}>
      <View style={tw('w-full mb-6 flex-row items-center justify-between px-4 py-10 bg-white')}>
        <View style={tw('items-start justify-center')}>
            <Text style={tw('font-bold text-2xl text-black mb-4')}>Quiz Challenge</Text>
            <Text style={tw('font-bold text-lg text-black')}>your progress</Text>
        </View>
       
        <Text style={tw('text-blue-500 font-bold text-lg')}>{result && result.choices && result.choices.length}/{quizs && quizs.length} Answered</Text>
      </View>
     <View style={tw('w-full px-4')}>
     <Progress.Bar  color='blue'  unfilledColor='white'   progress={quizs && result && result.choices && result.choices.length/quizs.length} width={100} height={10} style={tw('w-full rounded-full my-3 text-left')}/>
     </View>
      {quizs && quizs.length > 0 && <Quiz key={quizs[currentIndex].id} item={quizs[currentIndex]} chooseAnswer={chooseAnswer}></Quiz>}
      <View style={tw('flex-row w-full items-center justify-center')}>
        <Button onPress={backButton}  buttonStyle={tw('rounded-full bg-blue-500 text-white p-2 px-4 mr-4')} title="Back"></Button>
        <Button onPress={nextButton} buttonStyle={tw('rounded-full bg-blue-500 text-white p-2 px-4 mr-4')} title="Next"></Button>
      </View>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})