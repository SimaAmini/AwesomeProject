import React from 'react'
import LottieView from 'lottie-react-native'
import { View, StyleSheet } from 'react-native'

function ActivityIndicator({ visible = false }) {
    if (!visible) return null

    return (
        <View style={styles.overlay}>
            <LottieView
                autoPlay
                loop
                source={require('../assets/animations/loading.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1,
        elevation: 1,
        opacity: 0.8,
    },
})
export default ActivityIndicator
