import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importando os ícones
import { ModalFade } from '../screens/modal-fade/ModalFade';
import { ModalNone } from '../screens/modal-none/ModalNone';
import { ModalSlide } from '../screens/modal-slide/ModalSlide';

export function ModalTabRoutes() {
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

                    if (route.name === 'Fade') {
                        iconName = 'color-filter-outline';
                    } else if (route.name === 'None') {
                        iconName = 'stop-outline';
                    } else if (route.name === 'Slide') {
                        iconName = 'layers-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Screen name='Fade' component={ModalFade} />
            <Screen name='None' component={ModalNone} />
            <Screen name='Slide' component={ModalSlide} />
        </Navigator>
    )
}