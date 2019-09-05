import React from 'react'
import * as screens from '@/screens'
import { IconFont } from '@/components'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

/** 底部tab导航 */
export const BottomTabNavigator = createAppContainer(
    createBottomTabNavigator(
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
            class: {
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
            cart: {
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
            my: {
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
)
