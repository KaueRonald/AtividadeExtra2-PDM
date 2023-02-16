import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

export default AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={TabNavigator} />
        </Stack.Navigator>
    )
}