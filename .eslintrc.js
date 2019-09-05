module.exports = {
    root: true,
    extends: ['@react-native-community'],
    plugins: ['prettier'],
    rules: {
        'react-native/no-inline-styles': 0,
        'prettier/prettier': 'error',
        semi: ['error', 'never'],
    },
}
