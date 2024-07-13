import React, { useState } from "react"

import { View, Text, TouchableOpacity, Image } from "react-native"

import { useQuery } from "@tanstack/react-query"

import { useNavigation } from "@react-navigation/native"
import { fetchNews } from "../../../infrastructure/api/api"

import { MainAppStackTypes } from "../../../navigation/navigation-types"

import tw from "twrnc"
import { SafeAreaView } from "react-native-safe-area-context"
import List from "../../components/shared/list"
import { NewsProps } from "../../../domain/news"
import Header from "../../components/shared/Header"
import { styles } from "./styles"
import SearchBar from "../../components/shared/SearchBar"
import NewsItem from "../../components/common/NewsItem/NewsItem"

const Employees = () => {
  const navigation = useNavigation<MainAppStackTypes>()
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  })
  const [query, setQuery] = useState("")

  const filteredData = data?.filter((item: NewsProps) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  if (isLoading) return <Text style={tw`text-center mt-4`}>Loading...</Text>
  if (error) return <Text style={tw`text-center mt-4`}>Error loading news</Text>

  const handleNavigation = (item: NewsProps) => {
    navigation.navigate("NewsDetail", { news: item })
  }

  return (
    <SafeAreaView style={tw`flex-1 p-4`}>
      <Header title={"Home"} />
      <SearchBar query={query} setQuery={setQuery} />
      <List
        data={filteredData}
        loading={isLoading}
        onRefresh={refetch}
        keyExtractor={(item: NewsProps) => item.title}
        renderItem={({ item }) => (
          <NewsItem item={item} navigationHandler={handleNavigation} />
        )}
      />
    </SafeAreaView>
  )
}

export default Employees
