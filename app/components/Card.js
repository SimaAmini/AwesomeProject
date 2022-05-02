import React from 'react'
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'
import Text from './Text'

function Card({ title, subtitle, imageUrl, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,

        // elevation: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 8,
        textTransform: 'capitalize',
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
})

export default Card
