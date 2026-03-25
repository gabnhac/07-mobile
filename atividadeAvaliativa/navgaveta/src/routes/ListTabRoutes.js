import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Scroll } from '../screens/scroll/Scroll';
import { Flat } from '../screens/flat/Flat';
import { Section } from '../screens/section/Section';

export function ListTabRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator 
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', marginBottom: 5 },
                tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
                tabBarActiveTintColor: '#3498DB',
                tabBarInactiveTintColor: '#95A5A6',
                
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'ScrollView') {
                        iconName = 'swap-vertical-outline';
                    } else if (route.name === 'FlatList') {
                        iconName = 'list-outline';
                    } else if (route.name === 'SectionList') {
                        iconName = 'albums-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Screen name='ScrollView' component={Scroll} />
            <Screen name='FlatList' component={Flat} />
            <Screen name='SectionList' component={Section} />
        </Navigator >
    )
}