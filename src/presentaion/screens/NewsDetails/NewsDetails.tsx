import { RouteProp, useRoute } from "@react-navigation/native"
import React from "react"
import { Text, Image, ScrollView, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import ReadMore from "../../components/shared/ReadMore"
import Header from "../../components/shared/Header"
import { getFormattedDate } from "../../../shared/helpers/time-date"
import { styles } from "./styles"

interface NewsItemDetailProps {
  title: string
  content: string
  imageUrl: string
  publishedAt: string
}
const NewsDetail = ({ route }) => {
  const { news } = route.params

  const handleReadMorePress = () => {
    Linking.openURL(news.url)
  }

  return (
    <SafeAreaView style={tw`${styles.container}`}>
      <Header showBackButton title={"Detail"} />
      <Text style={tw`${styles.title}`}>{news.title}</Text>
      <Image source={{ uri: news.urlToImage }} style={tw`${styles.image}`} />
      <ScrollView style={tw`${styles.scrollViewStyle}`}>
        <ReadMore
          text={news.content}
          onReadMorePressedHandler={handleReadMorePress}
        />
        <Text style={tw`${styles.publishedDate}`}>
          Published on {getFormattedDate("en", news?.publishedAt)}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsDetail
