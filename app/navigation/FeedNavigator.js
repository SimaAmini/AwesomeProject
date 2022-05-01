import React from 'react'
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack'

import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

const Stack = createStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            presentation: 'modal',
            headerShown: false,
        }}
    >
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen
            name="ListingDetails"
            component={ListingDetailsScreen}
            options={{
                ...TransitionPresets.RevealFromBottomAndroid,
            }}
        />
    </Stack.Navigator>
)
export default FeedNavigator
