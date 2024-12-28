import { Button, Image, Text, View,Pressable } from 'react-native'
import styles from './style'

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image style={styles.img} source={require('../../../assets/undraw_done_checking_re_6vyx 1.svg')} />
				<Text>Gets things with TODs</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
					Consequat urna quam felis interdum quisque. Malesuada adipiscing
					tristique ut eget sed.
				</Text>
				<Pressable style={styles.btn} onPress={() => navigation.navigate('Auth')}>
                    <Text style={styles.text}>Get Started</Text>
                </Pressable>
			</View>
		</View>
	)
}
