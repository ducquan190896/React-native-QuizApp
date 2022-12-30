import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist'

const Option = ({ option, chooseAnswer, correctOption, clickChooseOption, clickChoose, questionId}) => {
    const tw = useTailwind()
 

  return (
    <TouchableOpacity onPress={() => {
      
       chooseAnswer({chosenOption: option.id, correctOption, questionId})
        clickChooseOption(option.id)
        
    } 
       
   }             
   id={option.id} 
   style={tw(`border py-2 px-4 rounded-full border-sky-500 border-2 flex-row items-center justify-start my-2 ${clickChoose && clickChoose == option.id ? "bg-red-400" : "bg-gray-200"}`)}>
       <Text style={tw('text-lg font-bold mr-8 text-blue-500')}>{option.options}</Text>
       <Text style={tw('text-lg font-bold text-blue-500')}>{option.answer}</Text>
   </TouchableOpacity>
  )
}

export default Option

const styles = StyleSheet.create({})