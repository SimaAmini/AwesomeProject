import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'

import colors from '../config/colors'

function UploadScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        progress={progress}
                        color={colors.primary}
                        width={200}
                    />
                ) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        style={styles.animation}
                        source={require('../assets/animations/done.json')}
                        onAnimationFinish={onDone}
                    />
                )}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    animation: {
        width: 150,
    },
})

export default UploadScreen
