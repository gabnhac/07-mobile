import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Importando os ícones

import { ModalTabRoutes } from './ModalTabRoutes';
import { ListTabRoutes } from './ListTabRoutes';
import { Welcome } from '../screens/welcome/Welcome';

export function MainDrawerRoutes() {
    const { Navigator, Screen } = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    drawerActiveBackgroundColor: '#EBF5FB',
                    drawerActiveTintColor: '#3498DB',
                    
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: { fontSize: 15, fontWeight: 'bold' },

                    headerStyle: { backgroundColor: '#3498DB', elevation: 0, shadowOpacity: 0 },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: 'bold' }
                }}
            >
                <Screen 
                    name="Welcome" 
                    component={Welcome} 
                    options={{
                        title: 'Início',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        )
                    }}
                />
                
                <Screen 
                    name="Modais" 
                    component={ModalTabRoutes} 
                    options={{
                        title: 'Testar Modais',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons name="copy-outline" size={size} color={color} />
                        )
                    }}
                />
                
                <Screen 
                    name="Listas" 
                    component={ListTabRoutes} 
                    options={{
                        title: 'Exemplos de Listas',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons name="list-circle-outline" size={size} color={color} />
                        )
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}