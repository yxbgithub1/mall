import React from 'react'
import * as screens from '@/screens'
import { IconFont, transition } from '@/components'
import { View, Text } from 'react-native'
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation'

/** 底部tab导航 */
export const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: screens.HomeScreen,
            navigationOptions: {
                tabBarLabel: '商城',
                tabBarIcon: ({ focused }) => (
                    <IconFont
                        name={'home'}
                        size={20}
                        color={`${focused ? 'red' : '#333'}`}
                    />
                ),
            },
        },
        Class: {
            screen: screens.ClassScreen,
            navigationOptions: {
                tabBarLabel: '分类',
                tabBarIcon: ({ focused }) => (
                    <IconFont
                        name={'class'}
                        size={20}
                        color={`${focused ? 'red' : '#333'}`}
                    />
                ),
            },
        },
        Cart: {
            screen: screens.ShoppingCartScreen,
            navigationOptions: {
                tabBarLabel: '购物车',
                tabBarIcon: ({ focused }) => (
                    <IconFont
                        name={'cart'}
                        size={22}
                        color={`${focused ? 'red' : '#333'}`}
                    />
                ),
            },
        },
        My: {
            screen: screens.MyScreen,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ focused }) => (
                    <IconFont
                        name={'my'}
                        size={20}
                        color={`${focused ? 'red' : '#333'}`}
                    />
                ),
            },
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            inactiveTintColor: '#333',
            activeTintColor: 'red',
            labelStyle: {
                fontSize: 11,
            },
        },
    }
)

class SettingScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>其他路由</Text>
            </View>
        )
    }
}

export const RootStack = createStackNavigator(
    {
        HomeScreen: {
            screen: BottomTabNavigator,
            navigationOptions: {
                header: null,
            },
        },
        Setting: SettingScreen,
    },
    {
        initialRouteName: 'HomeScreen',
        transitionConfig: transition,
        headerMode: 'screen',
    }
)

export const AppContainer = createAppContainer(RootStack)
