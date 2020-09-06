import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ErrorComponent = () => {
    return (
        <View style={styles.imgContainer}>
            <Image
                style={styles.img}
                source={require('../assets/images/technical_difficulties.jpg')}
            />
        </View>
    )
}

export default ErrorComponent

const styles = StyleSheet.create({
    imgContainer: {
        width: '100%',
        height: 300
    },
    img: {
        width: '100%',
        height: 300
    }    
})
