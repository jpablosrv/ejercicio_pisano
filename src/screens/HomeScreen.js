import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/globalStyles';
import Camera from '../components/Camera';
import { ScrollView } from 'react-native-gesture-handler';
import Video from 'react-native-video';
import { MainContext } from '../context/mainContext';



const HomeScreen = ({navigation}) => {

    const {video, setVideo} = useContext(MainContext)

    const handlerFoto = () => {
        navigation.navigate('ImagePreview');
    }
    
    const mostrarVideo = () => {
        navigation.navigate('PlayVideo', {
            video,
            navigation,
        });
    }
    

    const _capturaHandler = (data) => {
        setVideo(data)
    }

    return (
        <ScrollView style={styles.container}>
            <Text>Home Screen Tincho </Text>
            <Camera 

                capturaHandler={_capturaHandler}
            />
            <TouchableOpacity 
                onPress={handlerFoto}
                style={globalStyles.btnTouchable}
            >
                <Text  style={globalStyles.txtBtnTouchable}>
                    Sacar Foto
                </Text>
            </TouchableOpacity>


            <TouchableOpacity 
                onPress={mostrarVideo}
                style={globalStyles.btnTouchable}
                // disabled={video?.uri?.length > 0}
            >
                <Text  style={globalStyles.txtBtnTouchable}>
                    Mostrar Video
                </Text>
            </TouchableOpacity>

            <Text>
                {video?.uri}
            </Text>
            
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
