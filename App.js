import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput'
import Card from './app/components/Card'
import Icon from './app/components/Icon'
import ListingItem from './app/components/ListingItem'
import Screen from './app/components/Screen'
import AccountScreen from './app/screens/AccountScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import LoginScreen from './app/screens/LoginScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'

export default function App() {
    return <MessagesScreen />
}
