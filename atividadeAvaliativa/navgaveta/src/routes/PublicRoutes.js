import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/login-screen/LoginScreen';
import { MainDrawerRoutes } from './MainDrawerRoutes';
import RegisterScreen from '../screens/register-screen/RegisterScreen';

export function PublicRoutes() {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <NavigationContainer>
            <Navigator>          
                <Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{ headerShown: false }}
                    />

                <Screen 
                    name="Register" 
                    component={RegisterScreen} 
                    options={{ headerShown: false }}

                />
            </Navigator>
        </NavigationContainer>
    )
}