import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
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
