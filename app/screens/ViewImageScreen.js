import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons
                    name="close"
                    style={styles.icon}
                    size={35}
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    style={styles.icon}
                    size={35}
                />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/chair.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    icon: {
        color: colors.white,
    },
})

export default ViewImageScreen
