import React from 'react'
import { View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Icon({
    name,
    size = 40,
    backgroundColor = colors.black,
    iconColor = colors.white,
}) {
    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    )
}

export default Icon
