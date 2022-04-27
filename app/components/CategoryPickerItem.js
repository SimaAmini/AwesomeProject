import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from './Text'
import Icon from './Icon'

function CategoryPickerItem({ onPress, item }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    name={item.icon}
                    backgroundColor={item.backgroundColor}
                    size={80}
                />
                <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        width: '33%',
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
    },
})
export default CategoryPickerItem
