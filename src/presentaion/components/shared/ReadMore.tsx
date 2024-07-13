import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import tw from "twrnc"

type ReadTextMoreProps = {
  text?: string
  title?: string
  titleStyle?: string
  textStyle?: string
  enableReadMore?: boolean
  onReadMorePressedHandler: () => void
}

const ReadMore: React.FC<ReadTextMoreProps> = ({
  text,
  onReadMorePressedHandler,
}) => {
  let slicedText = text
  const firstOccurrenceOfThreeDots = text?.indexOf("[")

  if (firstOccurrenceOfThreeDots !== -1) {
    const endIndex = firstOccurrenceOfThreeDots
    slicedText = text?.slice(0, endIndex) + "Read More"
  }

  return (
    <View style={tw`mty-4`}>
      <TouchableOpacity onPress={onReadMorePressedHandler}>
        <Text style={tw`font-medium text-sm text-input`}>{slicedText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ReadMore
