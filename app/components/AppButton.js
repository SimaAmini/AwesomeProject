import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../config/colors'

const AppButton = ({ title, onPress, color = 'primary' }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})

export default AppButton
