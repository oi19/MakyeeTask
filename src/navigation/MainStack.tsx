import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { MainAppStackTypes } from "./navigation-types"
import News from "../presentaion/screens/News/News"
import NewsDetail from "../presentaion/screens/NewsDetails/NewsDetails"

const Stack = createStackNavigator<MainAppStackTypes>()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  )
}

export default MainStack
