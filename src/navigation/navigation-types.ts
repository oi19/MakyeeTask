import { IconsName } from "../assets/svgs"
import { NewsProps } from "../domain/news"

export type MainNavigationTypes = MainAppStackTypes

export type MainAppStackTypes = {
  navigate(arg0: string, arg1: { news: NewsProps }): unknown
  News: undefined
  NewsDetail: { data: NewsProps }
  EmployeeList: undefined
  EmployeeDetailScreen: { id: number }
}

export type MainNavigationAllScreensTypes = MainAppStackTypes
export type MainNavigationKeys = keyof MainAppStackTypes
