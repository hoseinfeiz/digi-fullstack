/** @jsxImportSource @emotion/react */
import React from 'react'
import { Text, View, FlatList, Image, Dimensions } from 'react-native'
import { cat_item_list } from '../../data/data_array'
import { css } from '@emotion/native'
const CategoryOne = () => {
  const productWidth = `${Dimensions.get('window').width / 3}px`
  const productHeight = `${Dimensions.get('window').width / 2}px`

  return (
    <View style={css``}>
      <View
        style={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          padding-right: 20px;
        `}
      >
        <Text
          style={css`
            padding: 20px;
            font-size: 20px;
            color: black;
            font-weight: bold;
          `}
        >
          پیشنهاد ما به شما
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={cat_item_list}
        renderItem={({ item }) => (
          <View
            style={css`
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              margin-bottom: 10px;
              margin-top: 10px;
              margin-left: 20px;
              flex: 1;
              justify-content: center;
              align-items: center;
              width: ${productWidth};
              height: ${productHeight};
            `}
          >
            <Image
              source={{ uri: item.img }}
              style={css`
                width: 90%;
                height: 40%;
                resize-mode: contain;
              `}
            />
            <View>
              <Text>{item.name}</Text>
            </View>
            <View>
              <Text>{item.price} تومان</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default React.memo(CategoryOne)
