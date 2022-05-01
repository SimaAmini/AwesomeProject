import React from 'react'
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native'
import colors from '../../config/colors'
import Text from '../Text'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ListItem({
    image,
    title,
    subtitle,
    onPress,
    renderRightActions,
    IconComponent,
}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailContainer}>
                            <Text style={styles.title} numberOfLines={1}>
                                {title}
                            </Text>
                            {subtitle && (
                                <Text style={styles.subtitle} numberOfLines={2}>
                                    {subtitle}
                                </Text>
                            )}
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={25}
                            color={colors.medium}
                        />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    title: {
        fontWeight: '500',
    },
    subtitle: {
        color: colors.medium,
    },
    detailContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
})

export default ListItem
