import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

export class YiSwiper extends React.Component {
    onPress = (slide, index) => () => this.props.onPress(slide, index)

    render() {
        const slides = this.props.data.reduce((result, slide, index) => {
            result.push(
                <TouchableOpacity
                    key={index}
                    style={styles.slide}
                    onPress={this.onPress(slide, index)}>
                    <View>
                        <Text>{`这是第${index}屏内容`}</Text>
                    </View>
                </TouchableOpacity>
            )
            return result
        }, [])
        return (
            <Swiper
                style={styles.swiper}
                height={this.props.height}
                index={this.props.index}
                showsButtons={false}>
                {slides}
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    slide: {},
    swiper: {},
})
