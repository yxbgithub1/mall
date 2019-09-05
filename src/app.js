import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import { BottomTabNavigator } from '@/layout'

/**
 * 入口文件
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <StatusBar
                    barStyle="dark-content"
                    networkActivityIndicatorVisible={true}
                />
                <BottomTabNavigator />
            </Fragment>
        )
    }
}