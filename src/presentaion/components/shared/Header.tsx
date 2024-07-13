import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import tw from "twrnc"
import { Svgs } from "../../../assets"

interface HeaderProps {
  title: string
  showBackButton?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigation = useNavigation()

  return (
    <View
      style={tw`flex-row items-center justify-${
        showBackButton ? "between" : "center"
      }`}
    >
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`mr-4 flex-row items-center`}
        >
          <Svgs name="arrow" />
        </TouchableOpacity>
      )}
      <Text style={tw`text-black text-lg font-bold flex-grow`}>{title}</Text>
      {!showBackButton && <View style={tw`flex-grow`} />}
    </View>
  )
}

export default Header
