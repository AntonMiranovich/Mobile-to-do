import { Button, Image, Text, View, TextInput, Pressable } from 'react-native'
import styles from './style'

export default function User() {

    return (
        <View style={styles.container}>
            <View style={styles.blocAvatar}>
                <Image style={styles.imgAvatar} source={require('../../../assets/avatar.svg')} />
                <Text style={styles.textAvatar}>Welcome Jeegar goyani</Text>
            </View>

            <View style={styles.wrapperTextGood}><Text style={styles.textGood}>Good Afternoon</Text></View>
            <View style={styles.wrapperTextList}><Text style={styles.textList}>Task list</Text></View>

            <View style={styles.wrapperTask}>
                <View style={styles.wrapperAdd}>
                    <Text style={styles.textDaily}>Daily Task</Text>
                    <Image style={styles.imgAdd} source={require('../../../assets/add.png')} />
                </View>

                <View style={styles.wrapperCheckbox}>
                    <Text>Text1</Text>
                    <Text>Text2</Text>
                    <Text>Text3</Text>
                    <Text>Text4</Text>
                    <Text>Text5</Text>
                </View>
            </View>
        </View>
    )
}