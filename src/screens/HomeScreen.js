import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/globalStyles';
import Camera from '../components/Camera';
import { ScrollView } from 'react-native-gesture-handler';
import { MainContext } from '../context/mainContext';
import ImagesList from '../components/ImagesList';



const HomeScreen = ({navigation}) => {

    const {video, setVideo, fotos, setFotos} = useContext(MainContext)

    
    const _capturaFotoHandler = (data) => {
        setFotos([...fotos,{uri: data.uri, id: fotos.length}])
    }

    const _capturaVideoHandler = (data) => {
        setVideo(data)
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={globalStyles.title}>Home</Text>
            <Camera 
                capturaVideoHandler={_capturaVideoHandler}
                capturaFotoHandler={_capturaFotoHandler}
            />
            <ImagesList
                navigation={navigation}
                fotos={fotos}
            />
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2
    }
})
