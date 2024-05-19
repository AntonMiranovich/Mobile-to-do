import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F4F3',
        alignItems: 'center',
        gap: 20
    },
    blocAvatar: {
        width: '100%',
        height: '25%',
        backgroundColor: '#50C2C9',
        alignItems: 'center',
        paddingTop: 50,
        gap: 10
    },
    imgAvatar: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    textAvatar: {
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
    },
    wrapperTextGood: {
        width: '80%',
        alignItems: 'flex-end',
    },
    textGood: {
        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    wrapperTextList: {
        width: '80%'
    },
    textList: {
        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    wrapperTask:{
        width:'80%',
        backgroundColor:'white',
        borderRadius:10,
        gap:20
    },
    wrapperAdd:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingTop:20,
    alignItems:"center"
    },
    textDaily:{
        color: 'grey',
        fontWeight: '600',
        fontSize: 12,
    }
})
export default styles