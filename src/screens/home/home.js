import React from 'react'
import Base from '@/screens/base'
import { View, Text, NativeModules } from 'react-native'

const { StatusBarManager } = NativeModules
let STATUSBAR_HEIGHT = StatusBarManager.HEIGHT || 100

export class HomeScreen extends Base {
    constructor(props) {
        super(props)
        this.state = {
            statusBarHeight: STATUSBAR_HEIGHT,
        }
        StatusBarManager.getHeight(({ statusBarHeight }) => {
            this.setState({
                statusBarHeight,
            })
        })
    }
    render() {
        return (
            <View>
                <Text>商城{this.state.statusBarHeight}</Text>
            </View>
        )
    }
}
