import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { cat_list } from '../../data/data_array';
import {swiper_imgs} from '../../data/data_array'
import { css } from '@emotion/native'
const Category = () => {
    return(
       <ScrollView disableIntervalMomentum
       showsHorizontalScrollIndicator={false} horizontal={true} style={css`
        margin: 10px;
       `}>
       {
        cat_list.map((item,key) => (
            <TouchableOpacity key={key} style={css`
                padding: 10px;
                margin: 10px;
                background-color: #50cc16;
                border-radius: 10px;
                `}>
                <Text style={css`
                    font-size: 20px;
                    color: #fff;
                    `}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        ))
       }
       
       </ScrollView>
    )
}

export default React.memo(Category)