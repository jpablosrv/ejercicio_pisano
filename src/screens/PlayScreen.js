import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import globalStyles from '../styles/globalStyles';
import ErrorComponent from '../components/ErrorComponent';
import { MainContext } from '../context/mainContext';

const PlayScreen = ({navigation, route}) => {

    const { video } = useContext(MainContext)

    console.log('Video : ', {video})


    const videoError = () => {
        return (<ErrorComponent/>)
    }

    return (
        <View style={globalStyles.playContainer}>
            <Text style={globalStyles.title}>Video Grabado</Text>
            <Text>{video.uri}</Text>
            <Video
                style={globalStyles.videoScreenContainer}
                onError={videoError}
                source={{uri: video.uri}}
                controls={true}
            />
        </View>
    )
}

export default PlayScreen;