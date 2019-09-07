import React, { Fragment } from 'react'
import {
    View,
    // Platform,
    StatusBar,
    NativeModules,
    // SafeAreaView,
} from 'react-native'

const { StatusBarManager } = NativeModules
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT
// export const Screen = props => (
//     <Fragment>
//         <StatusBar
//             barStyle="dark-content"
//             networkActivityIndicatorVisible={true}
//         />
//         <View style={{ marginTop: STATUSBAR_HEIGHT }}>{props.children}</View>
//     </Fragment>
// )

export class Screen extends React.Component {
    render() {
        return (
            <View style={{ marginTop: STATUSBAR_HEIGHT }}>
                {this.props.children}
            </View>
        )
    }
}
