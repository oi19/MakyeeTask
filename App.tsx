import { StatusBar, StyleSheet, useColorScheme, View } from "react-native"
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import store from "./src/application/index"

import { Colors } from "./src/shared/styles"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { NavigationContainer } from "@react-navigation/native"
import MainStack from "./src/navigation/MainStack"

const App = () => {
  const routeNameRef = React.useRef()
  const queryClient = new QueryClient()

  return (
    <SafeAreaProvider>
      <View style={styles.rootScreen}>
        <StatusBar
          translucent
          barStyle="dark-content"
          animated
          backgroundColor={"rgba(0,0,0,0)"}
        />
        <NavigationContainer ref={routeNameRef}>
          <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView style={styles.gesturehandleStyles}>
              <MainStack />
            </GestureHandlerRootView>
          </QueryClientProvider>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  gesturehandleStyles: {
    flex: 1,
  },
})
