import React, { useState } from 'react';
import { Image, Text, View, Pressable, CheckBox, Alert } from 'react-native'
import styles from './style'

export default function User() {
    const [date, setData] = useState([
        {
            id: '1',
            title: 'Learning Programming by 12PM',
            flag: false
        },
        {
            id: '2',
            title: 'Learn how to cook by 1PM',
            flag: false
        },
        {
            id: '3',
            title: 'Learn how to play at 2PM',
            flag: false
        },
        {
            id: '4',
            title: 'Have lunch at 4PM',
            flag: false
        },
        {
            id: '5',
            title: 'Going to travel 6PM',
            flag: false
        },
    ])

    const changeData = (el) => {
        const resArray = date.map((elem) => el.id != elem.id ? elem : {
            id: el.id,
            title: el.title,
            flag: !el.flag
        })

        setData(resArray)
    }

    const addTask = () => {
        let addTitle = ''
        Alert.prompt('Add Task', 'Add Name Task', (text) => addTitle = text)
        setData([...date, { id: date.length + 1, title: addTitle, flag: false }])
    }

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
                    <Pressable onPress={addTask}>
                        <Image style={styles.imgAdd} source={require('../../../assets/add.png')} />
                    </Pressable>
                </View>

                <View style={styles.check}>
                    {date.map((el, index) =>
                        <View style={styles.wrapperCheckbox} key={index}>
                            <CheckBox value={el.flag} onValueChange={() => changeData(el)} style={styles.checkbox} />
                            <Text style={styles.label}>{el.title}</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}