import { Button, Image, Text, View, TextInput, Pressable } from 'react-native'
import styles from './style'

export default function Auth({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Welcome back</Text>
                <Image style={styles.img} source={require('../../../assets/auth.svg')} />
                <TextInput style={styles.input} placeholder='Enter your Email' />
                <TextInput style={styles.input} secureTextEntry={true} placeholder='Enter Password' />
                <Text>Forget password ?</Text>
                <Pressable style={styles.btn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <Text >Don’t have an account ?<Text style={styles.textUrl} onPress={() => navigation.navigate('Reg')}> Sign Up</Text> </Text>
            </View>
        </View>
    )
}
