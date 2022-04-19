import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import ListingItem from '../components/ListingItem'
import colors from '../config/colors'

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../assets/jacket.jpg')}
            />
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Red Jacket</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListingItem
                        image={require('../assets/mosh.jpg')}
                        title="Sima Amini"
                        subtitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
    },
    detailContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    },
})
export default ListingDetailsScreen
