import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import usersApi from '../api/users'
import authApi from '../api/auth'
import Screen from '../components/Screen'
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from '../components/forms'
import useAuth from '../../auth/useAuth'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen() {
    const registerApi = useApi(usersApi.register)
    const loginApi = useApi(authApi.login)
    const [error, setError] = useState('')
    const { logIn } = useAuth()

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo)

        if (!result.ok) {
            if (result.data) return setError(result.data.error)
            else {
                setError('An unexpected error occurred.')
                console.log(result)
            }
            return
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        )
        logIn(authToken)
    }
    return (
        <>
            <ActivityIndicator
                visible={registerApi.loading || loginApi.loading}
            />
            <Screen style={styles.screen}>
                <Form
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <FormField
                        name="name"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Name"
                        textContentType="name"
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

                    <SubmitButton title="Register" />
                </Form>
            </Screen>
        </>
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
export default RegisterScreen
