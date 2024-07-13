import React from "react"
import { View, ActivityIndicator, Text } from "react-native"
import { BlurView } from "expo-blur"

import tw from "twrnc"

export interface InputProps {
  loadingDisabled?: boolean
}
const BlurProgressView = (props: InputProps) => {
  return (
    <BlurView style={tw`flex-1 justify-center items-center`} intensity={10}>
      <View
        style={tw`absolute inset-0 overflow-hidden flex justify-center items-center bg-white/70`}
      >
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    </BlurView>
  )
}
export default BlurProgressView
