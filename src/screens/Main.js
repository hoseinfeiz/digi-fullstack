import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Slider from '../components/MainScreen/Slider'
import Category from '../components/MainScreen/Category'
import Offer from '../components/MainScreen/Offer'
import Off from '../components/MainScreen/Off'
import KalaOne from '../components/MainScreen/KalaOne'
import KalaTwo from '../components/MainScreen/KalaTwo'
import { css } from '@emotion/native'
const Main = () => {
  return (
    <ScrollView style={css``}>
      <Slider />
      <Category />
      <Offer />
      <Off />
      <KalaOne />
      <KalaTwo />
    </ScrollView>
  )
}

export default React.memo(Main)
