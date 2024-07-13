import React from "react"
import { View, TextInput } from "react-native"
import tw from "twrnc"

interface SearchBarProps {
  query: string
  setQuery: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <View style={tw`py-4`}>
      <TextInput
        style={tw`border border-gray-300 p-2 rounded-lg`}
        placeholder="Search..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
    </View>
  )
}

export default SearchBar
