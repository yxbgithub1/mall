import React from 'react'
import Swiper from 'react-native-swiper'
import { View, Text, StyleSheet } from 'react-native'

export class MallSwiper extends React.Component {
    render() {
        return (
            <Swiper
                style={styles.swiper}
                loop={true}
                autoplay={true}
                showsButtons={true}
                autoplayTimeout={3}
                dot={<View style={styles.point} />}
                activeDot={<View style={styles.point} />}>
                <View key={1} style={styles.item}>
                    <Text>1</Text>
                </View>
                <View key={2} style={styles.item}>
                    <Text>2</Text>
                </View>
                <View key={3} style={styles.item}>
                    <Text>3</Text>
                </View>
                <View key={4} style={styles.item}>
                    <Text>4</Text>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    swiper: {
        height: 100,
    },
    point: {
        width: 15,
        height: 15,
        borderRadius: 4,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    active: {
        backgroundColor: '#83ffcf',
    },
    item: {
        flex: 1,
    },
})
