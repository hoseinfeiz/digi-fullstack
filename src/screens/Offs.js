import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import OffsOne from '../components/OffsScreen/OffsOne'
import { css } from '@emotion/native'
const Offs = () => {
  return (
    <ScrollView style={css``}>
      <OffsOne />
    </ScrollView>
  )
}

export default React.memo(Offs)
