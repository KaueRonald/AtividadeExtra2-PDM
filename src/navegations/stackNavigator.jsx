import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from "../screens/Dashboard";
import { Register } from '../screens/Register';
import { Summary } from '../screens/Summary';

const Stack = createNativeStackNavigator();

export const StackNavigatorDashboard = () => {
    return (
        <Stack.Navigator
            initialRouteName='Dashboard'
        >
            <Stack.Screen
                name="Dashboard-Home"
                component={Dashboard}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export const StackNavigatorRegister = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Register'
        >
            <Stack.Screen
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    )
}

export const StackNavigatorSummary = () => {
    return (
        <Stack.Navigator
            initialRouteName='Summary'
        >
            <Stack.Screen
                name="Summary"
                component={Summary}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}