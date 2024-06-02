import { View, ImageBackground } from 'react-native'
import styles from './style'
import { useEffect, useState } from 'react'
import img from '../../../assets/clock.png'

export default function Clock() {
	const [date, setDate] = useState()

	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 1000)
	}, [date])

	return (
		<View style={styles.container}>
			<View style={styles.clock}>
				<ImageBackground source={img} resizeMode="cover" style={styles.image}>
					<View style={styles.center} />
					<View style={[styles.hour, {
						transform: [{ rotateZ: `${new Date().getHours() * 30}deg` }],
					}]}>
						<View style={styles.hr}></View>
					</View>
					<View style={[styles.min, {
						transform: [{ rotateZ: `${new Date().getMinutes() * 6}deg` }],
					}]}>
						<View style={styles.mn}></View>
					</View>
					<View style={[styles.sec, {
						transform: [{ rotateZ: `${new Date().getSeconds() * 6}deg` }],
					}]}>
						<View style={styles.sc}></View>
					</View>
				</ImageBackground>
			</View >
		</View >
	)
}

