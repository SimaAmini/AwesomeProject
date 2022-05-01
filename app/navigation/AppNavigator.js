import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'
import routes from './routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopWidth: 0,
            },
        }}
    >
        <Tab.Screen
            name="Feed"
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="home"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="ListingEdit"
            component={ListingEditScreen}
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <NewListingButton
                        onPress={() => navigation.navigate(routes.LISTING_EDIT)}
                    />
                ),
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="plus-circle"
                        size={size}
                        color={color}
                    />
                ),
            })}
        />
        <Tab.Screen
            name="My Account"
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="account"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator
