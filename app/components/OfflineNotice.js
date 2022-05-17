import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

import Text from './Text'
import colors from '../config/colors'

function OfflineNotice() {
    const netInfo = useNetInfo()

    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Internet Connection</Text>
            </View>
        )
    return null
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: 'absolute',
        zIndex: 1, // not working on android
        width: '100%',
        top: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 50,
    },
    text: {
        color: colors.white,
    },
})

export default OfflineNotice
