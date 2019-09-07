import React from 'react'
import { SafeAreaView } from 'react-native'
import { AppContainer } from '@/layout'

/**
 * 入口文件
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class App extends React.Component {
    render() {
        return (
            // <SafeAreaView style={{ flex: 1 }}>
            //     {/* <StatusBar
            //         barStyle="dark-content"
            //         networkActivityIndicatorVisible={true}
            //     /> */}
            //     <AppContainer />
            // </SafeAreaView>
            <AppContainer />
        )
    }
}
