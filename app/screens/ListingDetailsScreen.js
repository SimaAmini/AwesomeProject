import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../components/Text'
import ListItem from '../components/list/ListItem'
import colors from '../config/colors'
import { Image } from 'react-native-expo-image-cache'

function ListingDetailsScreen({ route }) {
    const listing = route.params
    return (
        <View>
            <Image
                style={styles.image}
                uri={listing.images[0].url}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
            />
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem
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
