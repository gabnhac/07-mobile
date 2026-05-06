import {createContext, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PublicRoutes } from './src/routes/PublicRoutes';
import { MainDrawerRoutes } from './src/routes/MainDrawerRoutes';

export const AuthContext = createContext(null);

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext value={{ user, setUser }}>
      <SafeAreaProvider>
        {user ? <MainDrawerRoutes/> : <PublicRoutes />}
      </SafeAreaProvider>
    </AuthContext>
  );
}
