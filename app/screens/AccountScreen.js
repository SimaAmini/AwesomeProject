import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Icon from '../components/Icon'

import { ListItem, ListItemSeparator } from '../components/list'
import Screen from '../components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'

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
        targetScreen: routes.MESSAGES,
    },
]
export default function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
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
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                />
            </View>
            <View style={styles.container}>
                <ListItem
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
