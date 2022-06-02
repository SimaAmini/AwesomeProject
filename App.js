import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'

import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './auth/context'
import authStorage from './auth/storage'

export default function App() {
    const [user, setUser] = useState()
    const [isReady, setIsReady] = useState(false)

    const restoreUser = async () => {
        const user = await authStorage.getUser()
        if (user) setUser(token)
    }

    if (!isReady)
        return (
            <AppLoading
                startAsync={restoreUser}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
        )

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
