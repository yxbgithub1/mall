import { Dimensions, Platform } from 'react-native'

let { width } = Dimensions.get('window')

let IosTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 0.99, index + 1]
    const outputRange = [width, 0, -50, -50]

    const translateY = 0
    const translateX = position.interpolate({
        inputRange,
        outputRange,
    })

    // const opacity = position.interpolate({
    //     inputRange,
    //     outputRange: [0, 1, 1, 0],
    // })

    return {
        opacity: null,
        transform: [{ translateX }, { translateY }],
    }
}

let DroidTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 0.99, index + 1]

    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1, 0],
    })

    const translateX = 0
    const translateY = position.interpolate({
        inputRange,
        outputRange: [50, 0, 0, 0],
    })

    return {
        opacity,
        transform: [{ translateX }, { translateY }],
    }
}

export function transition() {
    return {
        screenInterpolator: sceneProps => {
            if (
                sceneProps.index === 0 &&
                sceneProps.scene.route.routeName !== 'MallScreen' &&
                sceneProps.scenes.length > 2
            ) {
                return null
            }

            const { position, scene } = sceneProps
            const { index } = scene
            return Platform.OS === 'ios'
                ? IosTransition(index, position)
                : DroidTransition(index, position)
        },
    }
}
