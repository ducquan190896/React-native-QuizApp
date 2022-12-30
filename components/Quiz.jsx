import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import Option from './Option'

const Quiz = ({item, chooseAnswer}) => {
    const tw = useTailwind()
    const {id, question, options, correctAnswerIndex} = item
    const [clickChoose, setClickChoose] = useState(null);
   const clickChooseFunction = (optionId) => {
        setClickChoose(optionId);
    }
 
  return (
    <View style={tw('w-full h-1/2')}>
        <Text style={tw('text-2xl font-bold mx-auto')}>{question}</Text>
        <View style={tw('my-2 w-full px-4')}>
            {options && options.map(option => (
                // <TouchableOpacity onPress={() => {
                //      setFinalOption(prev => !prev)
                //     chooseAnswer({chosenOption: option.id, correctOption: correctAnswerIndex})} 
                // }             
                // id={option.id} 
                // style={tw(`border py-2 px-4 rounded-full border-sky-500 border-2 flex-row items-center justify-start my-2 ${finalOption ? "bg-red-400" : "bg-gray-200"}`)}>
                //     <Text style={tw('text-lg font-bold mr-8 text-blue-500')}>{option.options}</Text>
                //     <Text style={tw('text-lg font-bold text-blue-500')}>{option.answer}</Text>
                // </TouchableOpacity>
                <Option questionId={id} chooseAnswer={chooseAnswer}  correctOption={correctAnswerIndex} option={option} clickChooseOption={clickChooseFunction} clickChoose={clickChoose}></Option>
            ))}
        </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({})