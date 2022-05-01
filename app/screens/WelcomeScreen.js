import React from 'react'
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native'
import Button from '../components/Button'
import routes from '../navigation/routes'

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={5}
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.tagline}>Sell What you dont need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <Button
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 20,
    },
})
export default WelcomeScreen
