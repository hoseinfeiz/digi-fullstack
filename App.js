import React from 'react'
import Main from './src/screens/Main'
import Category from './src/screens/Category'
import Offs from './src/screens/Offs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Offs">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Offs" component={Offs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
