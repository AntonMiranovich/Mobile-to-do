import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F4F3',
        alignItems: 'center',
    },
    card: {
        width: '60%',
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 170,
        height: 170,
        resizeMode: 'contain'
    },
    input: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    btn: {
        width: '80%',
        paddingVertical: 10,
        backgroundColor: '#50C2C9',
        borderRadius: 20
    },
    text: {
        textAlign: 'center'
    },
    textUrl: {
        color: '#50C2C9'
    }
})
export default styles