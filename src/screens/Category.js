import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import CategoryOne from '../components/CategoryScreen/CategoryOne'
import CategoryTwo from '../components/CategoryScreen/CategoryTwo'
import CategoryThree from '../components/CategoryScreen/CategoryThree'
import { css } from '@emotion/native'
const Category = () => {
  return (
    <ScrollView style={css``}>
      <CategoryOne />
      <CategoryTwo />
      <CategoryThree />
    </ScrollView>
  )
}

export default React.memo(Category)
