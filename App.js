import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import Home from './screens/Home';
import ResultScreen from './screens/ResultScreen';
import HomeNavigator from './tab/HomeNavigator';
import utilities from './tailwind.json';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import Store from './Store';

const tab = createBottomTabNavigator()
const stack = createNativeStackNavigator()

export default function App() {

 
  return (

    <TailwindProvider utilities={utilities}>
    <Provider store={Store}>
    <NavigationContainer>
      <tab.Navigator screenOptions={{
        tabBarStyle: {paddingVertical: 8}
      }}>
        <tab.Screen name='homeNavigator' component={HomeNavigator} options={{
          headerShown: false,
          tabBarIcon: ({focused }) => (<FontAwesome name="home" size={focused ? 26 : 22} color={focused ? "blue": "gray"} />)
          }}></tab.Screen>
        <tab.Screen name='resultNavigator' component={ResultScreen} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (<AntDesign name="profile" size={focused ? 26 : 22} color={focused ? "blue": "gray"}/>)
          
          }}></tab.Screen>
      </tab.Navigator> 
    </NavigationContainer>
    </Provider>
  </TailwindProvider>
  );
}

