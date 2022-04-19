import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen() {
    return (
        <Screen style={styles.screen}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />

                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
})
export default LoginScreen
