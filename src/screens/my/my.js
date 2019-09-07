import React from 'react'
import Base from '@/screens/base'
import { View, Text, Button } from 'react-native'
export class MyScreen extends Base {
    onClick = () => {
        this.navigationPush('Setting')
    }
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text>我的</Text>
                <Button title="跳转到设置" onPress={this.onClick} />
            </View>
        )
    }
}
