import React from 'react'
import { Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { swiper_imgs } from '../../data/data_array'
import styled, { css } from '@emotion/native'
const Slider = () => {
  const swiper_width = `${Dimensions.get('window').width / 2.7}px`
  return (
    <Swiper
      autoplay={false}
      style={css`
        display: flex;
        height: ${swiper_width};
        justify-content: center;
        align-items: center;
      `}
    >
      {swiper_imgs.map((item, key) => (
        <TouchableWithoutFeedback
          key={key}
          style={css`
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
          `}
        >
          <Image
            style={css`
              width: 100%;
              height: 100%;
            `}
            source={{ uri: item.img }}
          />
        </TouchableWithoutFeedback>
      ))}
    </Swiper>
  )
}

export default React.memo(Slider)
