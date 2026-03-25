import React from 'react';
import { MainDrawerRoutes } from './src/routes/MainDrawerRoutes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <MainDrawerRoutes />
    </SafeAreaProvider>
  );
}
