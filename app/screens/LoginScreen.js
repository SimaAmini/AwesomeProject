import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from '../components/forms'
import authApi from '../api/auth'
import useAuth from '../../auth/useAuth'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})

const LoginScreen = () => {
    const [loginFailed, setLoginFailed] = useState()
    const { logIn } = useAuth()

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password)

        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        logIn(result.data)
    }

    return (
        <Screen style={styles.screen}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <Form
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Invalid email and/or password"
                    visible={loginFailed}
                />

                <FormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />

                <FormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton title="Login" />
            </Form>
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
