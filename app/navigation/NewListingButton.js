import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    color={colors.white}
                    size={40}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderRadius: 40,
        bottom: 25,
        borderColor: colors.white,
        borderWidth: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default NewListingButton
