import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const AppBottomTabNavigation = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }} >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
                title: "Ana Sayfa"
            }} />
        </Tab.Navigator>
    )
}

export default AppBottomTabNavigation