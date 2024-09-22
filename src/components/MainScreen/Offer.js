import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import { offer_list } from '../../data/data_array'
import { css } from '@emotion/native'
import Ripple from 'react-native-material-ripple'
const Offer = () => {
  const offer_width = `${Dimensions.get('window').width / 3.4}px`

  return (
    <View
      style={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      `}
    >
      {offer_list.map((item, key) => (
        <Ripple
          key={key}
          style={css`
            width: ${key === 2 ? '95% ' : '45%'};
            height: ${offer_width};
            margin-top: 20px;
          `}
        >
          <Image
            style={css`
              width: 100%;
              height: 100%;
              border-radius: 10px;
            `}
            source={{ uri: item.img }}
          />
        </Ripple>
      ))}
    </View>
  )
}

export default React.memo(Offer)
