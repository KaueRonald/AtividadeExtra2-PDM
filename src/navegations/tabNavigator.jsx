import { Ionicons, MaterialIcons, Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigatorDashboard, StackNavigatorRegister, StackNavigatorSummary } from './stackNavigator';

import Global from '../global/styles/theme'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: Global.colors.secondary,
                    tabBarInactiveTintColor: Global.colors.text
                }}
            >
                <Tab.Screen name="Listagem"
                    component={StackNavigatorDashboard}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={
                                    focused
                                        ? 'ios-list'
                                        : 'ios-list'
                                }
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Cadastrar"
                    component={StackNavigatorRegister}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <MaterialIcons
                                name={
                                    focused
                                        ? 'attach-money'
                                        : 'attach-money'
                                }
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Resumo"
                    component={StackNavigatorSummary}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Foundation
                                name={
                                    focused
                                        ? 'graph-pie'
                                        : 'graph-pie'
                                }
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
    );
}
export default TabNavigator;