import React from 'react'
import { Dimensions, Image } from 'react-native'
import { off_list } from '../../data/data_array'
import { css } from '@emotion/native'
import Ripple from 'react-native-material-ripple'
const Off = () => {
  const off_width = `${Dimensions.get('window').width / 2.7}px`
  return (
    <Ripple
      style={css`
        width: 100%;
        height: ${off_width};
        margin-top: 20px;
        margin-bottom: 20px;
      `}
    >
      {off_list.map((item, key) => (
        <Image
          key={key}
          source={{ uri: item.img }}
          style={css`
            width: 100%;
            height: 100%;
          `}
        />
      ))}
    </Ripple>
  )
}

export default React.memo(Off)
