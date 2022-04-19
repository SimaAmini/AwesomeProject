import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Icon from '../components/Icon'

import ListingItem from '../components/ListingItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems = [
    {
        title: 'My Listing',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
    },
]
export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListingItem
                    title="Sima Amini"
                    subtitle="example@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListingItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <View style={styles.container}>
                <ListingItem
                    title="Log out"
                    subtitle="example@gmail.com"
                    IconComponent={
                        <Icon name="logout" backgroundColor="#ffe66d" />
                    }
                />
            </View>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    screen: {
        backgroundColor: colors.light,
    },
})
