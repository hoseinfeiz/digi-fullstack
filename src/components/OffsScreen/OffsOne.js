/** @jsxImportSource @emotion/react */
import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { off_items_list } from '../../data/data_array'
import { css } from '@emotion/native'
const OffsOne = () => {
  const productWidth = `${Dimensions.get('window').width / 3}px`
  const productHeight = `${Dimensions.get('window').width / 2}px`

  return (
    <View
      style={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
      `}
    >
      {off_items_list.map((item, key) => (
        <View
          style={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 20px;
            border: 1px solid green;
            margin-bottom: 10px;
          `}
        >
          <Image
            source={{ uri: item.img }}
            style={css`
              width: 30%;
              height: ${productHeight};
            `}
          />
        </View>
      ))}
    </View>
  )
}

export default React.memo(OffsOne)
